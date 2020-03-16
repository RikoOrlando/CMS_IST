import React, {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import EditForm from './formEditItem'
import {useSelector} from 'react-redux'

export default function EditItem({validateInput}) {
    const history = useHistory().location.pathname.split('/')
    const beforePath = `/${history[1]}/${history[2]}`
    const [animated, setAnimated] = useState('slideInRight')
    const {editData} = useSelector(state => state.data)
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
                    validateInput={validateInput}
                    done={handleClosed}
                />
            </div>
            {
                path ? <Redirect to={path}/> : <></>
            }
        </div>
    )
}