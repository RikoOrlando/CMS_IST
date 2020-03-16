import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {addUserRole} from '../store/actions/data'

let tableDB = null
const userName = ({input, meta}) => {
    return (
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user-alt"></i></span>
                </div>
                <input {...input} type="text" className="form-control" placeholder="User Name"/>
            </div>
            {
                meta.touched && meta.error ? <p className="validate">{meta.error}</p> : <></>
            }
        </>
    )
}

const password = ({input, meta}) => {
    return (
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                </div>
                <input {...input} type="password" className="form-control" placeholder="Password"/>
            </div>
            {
                meta.touched && meta.error ? <p className="validate">{meta.error}</p> : <></>
            }
        </>
    )
}

const fullName = ({input, meta}) => {
    return (
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-signature"></i></span>
                </div>
                <input {...input} type="text" className="form-control" placeholder="Full Name"/>
            </div>
            {
                meta.touched && meta.error ? <p className="validate">{meta.error}</p> : <></>
            }
        </>
    )
}

const roleName = ({input, meta}) => {
    return (
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user-alt"></i></span>
                </div>
                <input {...input} type="text" className="form-control" placeholder="Role Name"/>
            </div>
            {
                meta.touched && meta.error ? <p className="validate">{meta.error}</p> : <></>
            }
        </>
    )
}

const description = ({input, meta}) => {
    return (
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-signature"></i></span>
                </div>
                <input {...input} type="text" className="form-control" placeholder="Description"/>
            </div>
            {
                meta.touched && meta.error ? <p className="validate">{meta.error}</p> : <></>
            }
        </>
    )
}


const onSubmit = (value, dispatch) => {
    dispatch(addUserRole({input: value, table: tableDB}))
    setTimeout(() => {
        let modal = document.getElementById(`${tableDB}Add`)
        modal.classList.remove('show')
        modal.setAttribute('aria-hidden', 'true')
        modal.setAttribute('style', 'display: none')
        const modalsBackdrops = document.getElementsByClassName('modal-backdrop')
        for(let i=0; i<modalsBackdrops.length; i++) {
        document.body.removeChild(modalsBackdrops[i]);
        }
    }, 500)
}

const validation = (value) => {
    if(!value || value === ''){
        return 'This Field is Required'
    }
    return undefined
}

let userForm = ({handleSubmit, valid, table}) => {
    tableDB = table
    return (
        <div className="p-3 mb-5 bg-white rounded">
            <h3 className="titleRegister">Registration Form</h3>
            <form onSubmit={handleSubmit}>
                {
                    table === 'role' ? <>
                        <Field name="roleName" component={roleName} validate={validation}/>
                        <br/>
                        <Field name="description" component={description} validate={validation}/>
                    </>:
                    <>
                        <Field name="userName" component={userName} validate={validation}/>
                        <br/>
                        <Field name="password" component={password} validate={validation}/>
                        <br/>
                        <Field name="fullName" component={fullName} validate={validation}/>
                    </>
                }
                <div className="registrationBtnWrap">
                    <button disabled={!valid} type="submit" className="btn btn-primary">Registration</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: "addUserRole", onSubmit})(userForm)