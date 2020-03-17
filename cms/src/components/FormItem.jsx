import React, {useState} from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import {fireStorage} from '../store/config/index'
import {addNewData} from '../store/actions/data'

let propsValidate = null
let imageUrl = ''

const onSubmit = (val, dispatch) => {
    val.image = imageUrl
    let data = {
        input: val,
        table: propsValidate.table
    }
    dispatch(addNewData(data))
    setTimeout(() => {
        let modal = document.getElementById(propsValidate.table)
        modal.classList.remove('show')
        modal.setAttribute('aria-hidden', 'true')
        modal.setAttribute('style', 'display: none')
        const modalsBackdrops = document.getElementsByClassName('modal-backdrop')
        for(let i=0; i<modalsBackdrops.length; i++) {
        document.body.removeChild(modalsBackdrops[i]);
        }
    }, 500)
    dispatch(reset('itemForm'))
}

const title = ({input, meta}) => {
    return (
        <div className="form-group">
            <label>Title</label>
            <input {...input} type="text" className="form-control" placeholder={`max ${propsValidate.title.char} Char`}/>
            {
                meta.touched && meta.error ? <small className="validate form-text text-muted">{meta.error}</small> : <></>
            }
        </div>
    )
}

const description = ({input, meta}) => {
    return (
        <div className="form-group">
            <label>Description</label>
            <textarea {...input} type="text" rows="5" className="form-control" placeholder={`max ${propsValidate.description.char} Char`}></textarea>
            {
                meta.touched && meta.error ? <small className="validate form-text text-muted">{meta.error}</small> : <></>
            }
        </div>
    )
}

const validateTitle = (value) => {
    let data = value || ''
    if(data.length > propsValidate.title.char){
        return `Max ${propsValidate.title.char} Char`
    }
    return undefined
}

const validateDescription = (value) => {
    let data = value || ''
    if(data.length > propsValidate.description.char){
        return `Max ${propsValidate.description.char} Char`
    }
    return undefined
}

const FormItem  = ({handleSubmit, valid, validateInput}) => {
    const [image, setImage] = useState(false)
    const [imageUploaded, setImageUploaded] = useState('')
    const [progress, setProgress] = useState(0)
    const [validateImage, setValidateImage] = useState(false)
    const {size, width, height} = validateInput.image

    propsValidate = validateInput

    const handleChange = (event) => {
        setValidateImage(false)
        if(event.target.files[0]){
            let img = new Image()
            let _URL = window.URL
            img.onload = function () {
                if(this.width > width || this.height > height){
                    setImage(false)
                    setValidateImage(true)
                }
            }
            img.src = _URL.createObjectURL(event.target.files[0])
            if(event.target.files[0].size/1000 < size){
                setImage(event.target.files[0])
            } else {
                setValidateImage(true)
            }
        }
    }

    const handleUpload = () => {
        if(image){
            const uploadTask = fireStorage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_changed', 
            (snapShot) => {
                const prg = Math.round((snapShot.bytesTransferred/snapShot.totalBytes) * 100)
                setProgress(prg)
    
            },
            (error) => {
                console.log(error)
            },
            () => {
                fireStorage.ref('images').child(image.name).getDownloadURL()
                .then((data) => {
                    imageUrl = data
                    setImageUploaded(data)
                    setProgress(0)
                    setImage(false)
                    setValidateImage(false)
                })
            }
            )
        }
    }

    const resetForm = () => {
        setImageUploaded('')
        document.getElementById('inputImage').value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field name="title" component={title} validate={validateTitle}/>
            {
                validateInput.description.val ? <Field name="Description" component={description} validate={validateDescription}/> : <></>
            }
            <div className="form-group">
                <label>Image</label> <br/>
                <input type="file" id="inputImage" className="form-control" onChange={handleChange.bind(this)}/>
                {
                    validateImage ? <small className="validate form-text text-muted">{`max ${size}kb and ${width} x ${height}`}</small> : <></>
                }    
                <br/>
                <div className="wrapImageUploade">
                    <progress value={progress} max="100"/>
                    <br/>
                    <img className="imageUploaded" src={imageUploaded || 'https://rumushitung.com/forum/wp-content/themes/qaengine/img/default-thumbnail.jpg'} alt=""/>
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleUpload}>Upload</button>
                </div>
            </div>
            <span>
                <button type="submit" className="btn btn-primary" onClick={resetForm} disabled={!valid}>Submit</button>
            </span>
        </form>
    )
}

export default reduxForm({form: 'itemForm', onSubmit})(FormItem)