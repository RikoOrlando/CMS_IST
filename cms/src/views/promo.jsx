import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import FormItem from '../components/FormItem'
import {db} from '../store/config/index'
import CardList from '../components/cardWrap'
import {Switch, Route} from 'react-router-dom'
import Edit from '../components/editForm'

export default function Promo() {
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
        table: 'promo'
    }

    useEffect(() => {
        return db.collection('promo').onSnapshot(function (doc) {
            let promo = []
            doc.docs.forEach(element => {
                let promoData = element.data()
                promoData.id = element.id
                promo.push(promoData)
            });
            dispatch({type: 'SET_PROMO', val: promo})
        })
    },[dispatch])
    return(
        <div className="wrapSideContentEdit">
            <div className="child">
                <div className="navBarNested">
                    <div className="navigationSign">
                        Home >> Promo
                    </div>
                    <div>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#promo">add</button>
                    </div>
                </div>
                <div className="contentWrap">
                    <div className="itemData">
                        <CardList table="promo"/>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/mainPage/promo/edit">
                    <Edit validateInput={baseValidate}/>
                </Route>
            </Switch>
            {/* modal */}
            <div className="modal fade" id="promo" tabIndex="-1" role="dialog" aria-labelledby="promo" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="promo">Add New Data</h5>
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