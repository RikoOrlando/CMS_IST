import React, {useEffect} from 'react'
import Table from '../components/tableUserRole'
import {useDispatch} from 'react-redux'
import FormItem from '../components/userForm'
import {db} from '../store/config/index'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/sideEditUserRole'

export default function Role() {
    const dispatch = useDispatch()

    useEffect(() => {
        return db.collection('role').onSnapshot(function (doc) {
            let role = []
            doc.docs.forEach(element => {
                let roleData = element.data()
                roleData.id = element.id
                role.push(roleData)
            })
            dispatch({type: 'SET_ROLE', val: role})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Role
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#roleAdd">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <Table table="role" column={{first: 'Role Name', second: 'Description'}} read={{first: 'roleName', second: 'description'}}/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/role/edit">
                    <Edit/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="roleAdd" tabIndex="-1" role="dialog" aria-labelledby="role" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormItem table="role"/>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}