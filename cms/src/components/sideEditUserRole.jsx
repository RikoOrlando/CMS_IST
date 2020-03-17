import React, {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import EditForm from './editUserRole'
import {useSelector} from 'react-redux'

export default function EditItem() {
    const history = useHistory().location.pathname.split('/')
    const beforePath = `/${history[1]}/${history[2]}`
    const [animated, setAnimated] = useState('slideInRight')
    const {editData, user} = useSelector(state => state.data)
    const [path, setPath] = useState(false)
    const handleClosed = () => {
        setAnimated('slideOutRight')
        setTimeout(() => {
            setPath(beforePath)
        }, 1000);
    }
    return(
        <div className={`edit animated slideInRight ${animated}`}>
            <div className="headerEdit">
                <i className="fas fa-times iconClose" onClick={handleClosed}></i>
            </div>
            <div className="containerEditForm">
                <EditForm
                    data={editData}
                    done={handleClosed}
                    table={history[2]}
                    userData={user}
                />
            </div>
            {
                path ? <Redirect to={path}/> : <></>
            }
        </div>
    )
}