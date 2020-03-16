import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteData} from '../store/actions/data'
import {Link} from "react-router-dom"

export default function TableRow({data, index, table}) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteData({input: data, table}))
    }
    const handleEdit = () => {
        dispatch({type: 'SET_EDITDATA', val: data})
    }
    return (
        <div className="row rowTable">
            <div className="col-1">{index+1}</div>
            <div className="col-3 title">{data.title}</div>
            <div className="col-3 description">
                <p>
                    {data.Description}
                </p>
            </div>
            <div className="col-1">{data.created_by}</div>
            <div className="col-1">{data.modified_by}</div>
            <div className="col-1">{data.status}</div>
            {
                data.status === 'active' ?
                <div className="col-2">
                    <span className="deleteItem pointer" onClick={handleDelete}>Delete</span>
                    <Link to={`/mainPage/${table}/edit`}>
                        <span onClick={handleEdit}>Update</span>
                    </Link>
                </div> : <></>
            }
        </div>

    )
}