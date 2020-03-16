import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import FormItem from '../components/FormItem'
import {db} from '../store/config/index'
import CardList from '../components/cardWrap'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/editForm'

export default function Tabungan() {
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
        table: 'tabungan'
    }

    useEffect(() => {
        return db.collection('tabungan').onSnapshot(function (doc) {
            let tabungan = []
            doc.docs.forEach(element => {
                let tabunganData = element.data()
                tabunganData.id = element.id
                tabungan.push(tabunganData)
            });
            dispatch({type: 'SET_TABUNGAN', val: tabungan})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Tabungan
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#tabungan">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <CardList table="tabungan"/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/mainPage/tabungan/edit">
                    <Edit validateInput={baseValidate}/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="tabungan" tabIndex="-1" role="dialog" aria-labelledby="tabungan" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tabungan">Add New Data</h5>
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