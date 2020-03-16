import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteData} from '../store/actions/data'
import {Link} from "react-router-dom"

export default function CardItem(params) {
    const dispatch = useDispatch()
    const {data, table} = params
    const handleDelete = () => {
        dispatch(deleteData({input: data, table}))
    }
    const handleEdit = () => {
        dispatch({type: 'SET_EDITDATA', val: data})
    }

    return(
        <div className="cardItem">
            <div className="card cardSize">
                <img className="card-img-top cardImage" src={data.image} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5> 
                    <small className="text-muted">{`Status: ${data.status}`}</small> <br/>
                    <small className="text-muted">{`Created: ${data.created} by ${data.created_by}`}</small>
                    <br/>
                    <div className="bottomCard">
                        <small className="text-muted">{`Modified: ${data.modified} by ${data.modified_by}`}</small>
                        {
                            data.status === 'active' ? 
                            <span>
                                <i className="fas fa-trash-alt iconDelete" onClick={handleDelete}></i>
                                <Link 
                                    to={`/mainPage/${table}/edit`}
                                >
                                    <i className="fas fa-edit iconEdit" onClick={handleEdit}></i>
                                </Link>
                            </span> : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}