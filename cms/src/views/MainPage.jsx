import React from 'react'
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import {Switch, Route} from 'react-router-dom'
import User from './user'
import Item from './item'
import Provinsi from './provinsi'
import Biaya from './biaya'
import Promo from './promo'
import Tabungan from './tabungan'
import Wisata from './wisata'
import Role from './role'

export default function MainPage() {
    return (
        <div>
            <Navbar/>
            <div className="mainPageContentWrap">
                <SideBar/>
                <div className="tableContent">
                    <Switch>
                        <Route path="/mainPage/user">
                            <User/>
                        </Route>
                        <Route path="/mainPage/role">
                            <Role/>
                        </Route>
                        <Route path="/mainPage/item">
                            <Item/>
                        </Route>
                        <Route path="/mainPage/provinsi">
                            <Provinsi/>
                        </Route>
                        <Route path="/mainPage/biaya">
                            <Biaya/>
                        </Route>
                        <Route path="/mainPage/promo">
                            <Promo/>
                        </Route>
                        <Route path="/mainPage/tabungan">
                            <Tabungan/>
                        </Route>
                        <Route path="/mainPage/wisata">
                            <Wisata/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}