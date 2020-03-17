import React, {useEffect} from 'react'
import Table from '../components/tableUserRole'
import {useDispatch, useSelector} from 'react-redux'
import FormItem from '../components/userForm'
import {db} from '../store/config/index'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/sideEditUserRole'

export default function User() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.data)

    useEffect(() => {
        return db.collection('user').onSnapshot(function (doc) {
            let user = []
            doc.docs.forEach(element => {
                let userData = element.data()
                userData.id = element.id
                user.push(userData)
            })
            dispatch({type: 'SET_USER', val: user})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> User
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#userAdd">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <Table table="user" column={{first: 'Username', second: 'Full Name'}} read={{first: 'userName', second: 'fullName'}}/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/user/edit">
                    <Edit/>
                </Route>
            </Switch>

            {/* modal */}
            <div className="modal fade" id="userAdd" tabIndex="-1" role="dialog" aria-labelledby="user" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormItem dataUser={user} table="user"/>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}