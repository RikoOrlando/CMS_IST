import {db} from '../config/index'

export const addNewData = (data) => {
    return function (dispatch, state) {
        data.input.created = new Date().toLocaleString().split(',')[0]
        data.input.modified = 'origin'
        data.input.created_by = state().user.login.fullName
        data.input.modified_by = 'origin'
        data.input.status = 'active'
        
        dispatch({type: 'SET_LOADING', val: 'addNewItem'})
        db.collection(data.table).add(data.input)
        .then(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}

export const deleteData = (data) => {
    return function (dispatch, state) {
        data.input.modified = new Date().toLocaleString().split(',')[0] 
        data.input.modified_by = state().user.login.fullName
        data.input.status = 'delete'
        
        dispatch({type: 'SET_LOADING', val: 'deleteData'})
        db.collection(data.table).doc(data.input.id).set(data.input)
        .then(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}

export const updateData = (data) => {
    return function (dispatch, state) {
        data.input.modified = new Date().toLocaleString().split(',')[0] 
        data.input.modified_by = state().user.login.fullName
        data.input.status = 'active'
        if(data.input.description === undefined){
            delete data.input.description
        }
        dispatch({type: 'SET_LOADING', val: 'updateData'})
        db.collection(data.table).doc(data.input.id).set(data.input)
        .then(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}

export const addUserRole = (data) => {
    return function (dispatch, state) {
        data.input.created = new Date().toLocaleString().split(',')[0]
        data.input.modified = 'origin'
        data.input.status = 'active'
        dispatch({type: 'SET_LOADING', val: 'addUserRole'})
        db.collection(data.table).add(data.input)
        .then(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}

export const deleteUserRole = (data) => {
    return function (dispatch, state) {
        data.input.modified = new Date().toLocaleString().split(',')[0]
        data.input.status = 'delete'
        
        dispatch({type: 'SET_LOADING', val: 'deleteUserRole'})
        db.collection(data.table).doc(data.input.id).set(data.input)
        .then(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}

export const updateUserRole = (data) => {
    return function (dispatch, state) {
        data.input.modified = new Date().toLocaleString().split(',')[0]
        dispatch({type: 'SET_LOADING', val: 'updateUserRole'})
        db.collection(data.table).doc(data.input.id).set(data.input)
        .then(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
        .catch(() => {
            dispatch({type: 'SET_LOADING', val: false})
        })
    }
}