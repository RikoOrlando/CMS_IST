import {db} from '../config/index'
import Swal from 'sweetalert2'

export const registrationUSer = (data) => {
    return function (dispatch) {
        dispatch({type: 'SET_LOADING', val: 'login'})
        let input = {
            userName: data.userName,
            password: data.password,
            fullName: data.fullName,
            role: 'admin',
            created: new Date().toLocaleString().split(',')[0],
            modified: false,
            status: 'active'
        }
        db.collection('user').where('userName', '==', data.userName).get()
        .then((datadB) => {
            if(datadB.docs.length === 0){
                return db.collection('user').add(input)
            }
            else {
                throw new Error()
            }
        })
        .then(() => {
            dispatch({type: 'SET_LOGIN', val: {userName: data.userName, fullName: data.fullName}})
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch((s) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username Already Taken!',
            })
            dispatch({type: 'SET_VALIDATE', val: 'User Name already use'})
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}

export const Login = (data) => {
    return function (dispatch) {
        dispatch({type: 'SET_LOADING', val: 'login'})
        db.collection('user').where('userName', '==', data.userName).get()
        .then((dataDb) => {
            if(dataDb.docs.length === 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Username or Password!',
                })
            }
            else {
                if(dataDb.docs[0].data().password === data.password){
                    dispatch(
                        {
                            type: 'SET_LOGIN', 
                            val: {
                                userName: data.userName, 
                                fullName: dataDb.docs[0].data().fullName
                            }
                        }
                    )
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Wrong Username or Password!',
                    })
                }
            }
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch((s) => {
            dispatch({type: 'SET_VALIDATE', val: 'User Name already use'})
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}