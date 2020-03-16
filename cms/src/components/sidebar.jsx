import React from 'react'
import {Link} from "react-router-dom"

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="wrapItemsideBar">
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/role">
                        <i className="fas fa-dice-d6"></i> <span className="desIcon"> Role </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/user">
                        <i className="fas fa-address-book"></i> <span className="desIcon"> User </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/item">
                        <i className="fas fa-box"></i> <span className="desIcon"> Item </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/provinsi">
                        <i className="fas fa-globe-asia"></i> <span className="desIcon"> Provinsi </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/biaya">
                        <i className="fas fa-dollar-sign"></i> <span className="desIcon"> Biaya </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/promo">
                        <i className="fas fa-ad"></i> <span className="desIcon"> Promo </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/tabungan">
                        <i className="fas fa-piggy-bank"></i> <span className="desIcon"> Tabungan </span>
                    </Link>
                </div>
                <div className="sidebarItem">
                    <Link className="link" to="/mainPage/wisata">
                        <i className="fas fa-location-arrow"></i> <span className="desIcon"> Wisata </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}