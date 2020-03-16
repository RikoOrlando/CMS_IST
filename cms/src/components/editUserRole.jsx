import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {updateUserRole} from '../store/actions/data'
import {connect} from 'react-redux'

let tableDB = null
let dataBefore = null
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


const onSubmit = (value, dispatch, {done}) => {
    value.status = dataBefore.status
    value.id = dataBefore.id
    value.created = dataBefore.created
    dispatch(updateUserRole({input: value, table: tableDB}))
    done()
}

const validation = (value) => {
    if(!value || value === ''){
        return 'This Field is Required'
    }
    return undefined
}

let userForm = ({handleSubmit, valid, table, data}) => {
    tableDB = table
    dataBefore = data
    return (
        <div className="p-3 mb-5 rounded">
            <h3 className="titleRegister">Edit Form</h3>
            <form onSubmit={handleSubmit}>
                {
                    table === 'role' ? 
                    <>
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
                    <button disabled={!valid} type="submit" className="btn btn-primary">Update Data</button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(state, props) {
    return {
      initialValues: props.data
  }
}

userForm = reduxForm({
    form: 'formEditUserRole',
    onSubmit
})(userForm)

export default connect(mapStateToProps)(userForm)