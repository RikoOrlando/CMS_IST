import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function PrivateRoute (props) {
    const user = useSelector(state => state.user.login)
    return (
        <Route {...props}>
            {
                user
                  ? props.children
                  : <Redirect
                    to="/"
                  />
            }
        </Route>
    )
}