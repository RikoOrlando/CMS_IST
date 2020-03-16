import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import FormItem from '../components/FormItem'
import {db} from '../store/config/index'
import CardList from '../components/cardWrap'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/editForm'

export default function Biaya() {
    const dispatch = useDispatch()
    const baseValidate = {
        image: {
            width: 1080, 
            height: 1480, 
            size: 1000
        }, 
        title: {
            char:50
        }, 
        description: {
            char: 255,
            val: false
        },
        table: 'biaya'
    }

    useEffect(() => {
        return db.collection('biaya').onSnapshot(function (doc) {
            let biaya = []
            doc.docs.forEach(element => {
                let biayaData = element.data()
                biayaData.id = element.id
                biaya.push(biayaData)
            });
            dispatch({type: 'SET_BIAYA', val: biaya})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Biaya
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#biaya">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <CardList table="biaya"/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/biaya/edit">
                    <Edit validateInput={baseValidate}/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="biaya" tabIndex="-1" role="dialog" aria-labelledby="biaya" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="biaya">Add New Data</h5>
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