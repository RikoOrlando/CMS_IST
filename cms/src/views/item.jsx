import React, {useEffect} from 'react'
import Table from '../components/table'
import {useDispatch} from 'react-redux'
import FormItem from '../components/FormItem'
import {db} from '../store/config/index'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/editForm'

export default function Item() {
    const dispatch = useDispatch()
    const baseValidate = {
        image: {
            width: 800, 
            height: 300, 
            size: 255
        }, 
        title: {
            char:50
        }, 
        description: {
            char: 255,
            val: true
        },
        table: 'item'
    }

    useEffect(() => {
        return db.collection('item').onSnapshot(function (doc) {
            let item = []
            doc.docs.forEach(element => {
                let itemData = element.data()
                itemData.id = element.id
                item.push(itemData)
            });
            dispatch({type: 'SET_ITEM', val: item})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Item
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#item">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <Table table="item"/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/item/edit">
                    <Edit validateInput={baseValidate}/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="item" tabIndex="-1" role="dialog" aria-labelledby="item" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="item">Add New Data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormItem from="navbar" validateInput={baseValidate}/>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}