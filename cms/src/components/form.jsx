import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {registrationUSer, Login} from '../store/actions/user'
import Load from './loadingBottom'

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


const onSubmit = (value, dispatch, {action}) => {
    if(action === 'Registration'){
        dispatch(registrationUSer(value))
    } else {
        dispatch(Login(value))
    }
}

const validation = (value) => {
    if(!value || value === ''){
        return 'This Field is Required'
    }
    return undefined
}

let userForm = ({handleSubmit, valid, action, loading, show, togle}) => {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded formRegister">
            <h3 className="titleRegister">{action} Form</h3>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <Field name="userName" component={userName} validate={validation}/>
                    <br/>
                    <Field name="password" component={password} validate={validation}/>
                    <br/>
                    {
                        action === 'Registration' ?
                        <Field name="fullName" component={fullName} validate={validation}/> :
                        <></>
                    }
                </div>
                <div className="registrationBtnWrap">
                    {
                        loading === 'login' ?
                        <Load/> :
                        <button disabled={!valid} type="submit" className="btn btn-primary">{action}</button>
                    }
                    {/* <button className="btn btn-light btn-sm btnChange" onClick={togle}>{show}</button> */}
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: "registerUser", onSubmit})(userForm)