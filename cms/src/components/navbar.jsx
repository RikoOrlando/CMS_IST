import React from 'react'
import {useDispatch} from 'react-redux'

export default function Navbar() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch({type: 'SET_LOGIN', val: false})
    }
    return (
        <>
            <nav className="navbar navbar-light navBarWrap">
                <h2 href="#" className="navbar-brand logo">CMS</h2>
                <form className="form-inline">
                    {/* <input className="form-control mr-sm-2" type="search"/> */}
                    <button type="button" className="btn btn-warning my-2 my-sm-0 btn-sm" onClick={handleLogout} >Logout</button>
                </form>
            </nav>
        </>
    )
}