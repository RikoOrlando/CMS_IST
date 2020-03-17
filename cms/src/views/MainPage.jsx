import React from 'react'
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import {Switch, Route} from 'react-router-dom'
import AdminRoute from '../customhook/adminRoute'
import User from './user'
import Item from './item'
import Provinsi from './provinsi'
import Biaya from './biaya'
import Promo from './promo'
import Tabungan from './tabungan'
import Wisata from './wisata'
import Role from './role'
import Idle from '../customhook/idleTimer'

export default function MainPage() {
    return (
        <div>
            <Navbar/>
            <div className="mainPageContentWrap">
                <SideBar/>
                <div className="tableContent">
                    <Switch>
                        <AdminRoute path="/mainPage/user">
                            <User/>
                        </AdminRoute>
                        <AdminRoute path="/mainPage/role">
                            <Role/>
                        </AdminRoute>
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
            <Idle/>
        </div>
    )
}