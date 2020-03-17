import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function AdminRoute(props) {
    const {login} = useSelector(state => state.user)
    return (
        <Route {...props}>
            {
                login.role === 'admin' 
                ? props.children
                : <Redirect to="/mainPage/item"/>
            }
        </Route>
    )
}