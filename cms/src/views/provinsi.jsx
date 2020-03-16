import React, {useEffect} from 'react'
import Table from '../components/table'
import {useDispatch} from 'react-redux'
import FormItem from '../components/FormItem'
import {db} from '../store/config/index'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/editForm'

export default function Provinsi() {
    const dispatch = useDispatch()
    const baseValidate = {
        image: {
            width: 1080, 
            height: 1386, 
            size: 100
        }, 
        title: {
            char:50
        }, 
        description: {
            char: 500,
            val: true
        },
        table: 'provinsi'
    }

    useEffect(() => {
        return db.collection('provinsi').onSnapshot(function (doc) {
            let provinsi = []
            doc.docs.forEach(element => {
                let provinsiData = element.data()
                provinsiData.id = element.id
                provinsi.push(provinsiData)
            });
            dispatch({type: 'SET_PROVINSI', val: provinsi})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Provinsi
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#provinsi">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <Table table="provinsi"/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/provinsi/edit">
                    <Edit validateInput={baseValidate}/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="provinsi" tabIndex="-1" role="dialog" aria-labelledby="provinsi" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="provinsi">Add New Data</h5>
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