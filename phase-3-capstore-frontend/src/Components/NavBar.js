import React, {useState} from "react"
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-div">
            <h1 className="nav-title">NoCap</h1>
            <NavLink to="/"><a className="nav-links"><span>Home</span></a></NavLink>
            <NavLink to="/stores"><a className="nav-links"><span>Stores</span></a></NavLink>
            <NavLink to="/search"><a className="nav-links"><span>Search</span></a></NavLink>
            <NavLink to="/inventory"><a className="nav-links"><span>Inventory</span></a></NavLink>
        </div>

    )

}

export default NavBar