import React from 'react'
import {deleteUserRole} from '../store/actions/data'
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"

export default function TableRole({index, data, read, table}) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteUserRole({input: data, table}))
    }
    const handleUpdate = () => {
        dispatch({type: 'SET_EDITDATA', val: data})
    }
    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td>{data[read.first]}</td>
                <td>{data[read.second]}</td>
                <td>{data.created}</td>
                <td>{data.modified}</td>
                <td>{data.status}</td>
                {
                    data.status ==='active' ? 
                    <td>
                        <span className="deleteItem pointer" onClick={handleDelete}>Delete</span>
                        <Link
                            to={`/mainPage/${table}/edit`}
                        >
                            <span className="pointer" onClick={handleUpdate}>Update</span>
                        </Link>
                    </td> :
                    <></>
                }
            </tr>
        </>
    )
}