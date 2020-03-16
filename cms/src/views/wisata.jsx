import React, {useEffect} from 'react'
import Table from '../components/table'
import {useDispatch} from 'react-redux'
import FormItem from '../components/FormItem'
import {db} from '../store/config/index'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/editForm'

export default function Wisata() {
    const dispatch = useDispatch()
    const baseValidate = {
        image: {
            width: 1080, 
            height: 720, 
            size: 100
        }, 
        title: {
            char:50
        }, 
        description: {
            char: 500,
            val: true
        },
        table: 'wisata'
    }

    useEffect(() => {
        return db.collection('wisata').onSnapshot(function (doc) {
            let wisata = []
            doc.docs.forEach(element => {
                let wisataData = element.data()
                wisataData.id = element.id
                wisata.push(wisataData)
            });
            dispatch({type: 'SET_WISATA', val: wisata})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Wisata
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#wisata">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <Table table="wisata"/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/wisata/edit">
                    <Edit validateInput={baseValidate}/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="wisata" tabIndex="-1" role="dialog" aria-labelledby="wisata" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="wisata">Add New Data</h5>
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