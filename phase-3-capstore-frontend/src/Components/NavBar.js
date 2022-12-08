import React, {useState} from "react"
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-div">
            <h1 className="nav-title">No Cap : We have every Cap</h1>
            <NavLink to="/">
                <a className="nav-links">Home</a>
            </NavLink>
            <NavLink to="/Stores">
                <a className="nav-links">Stores</a>
            </NavLink>
            <NavLink to="/search">
                <a className="nav-links">Search</a>
            </NavLink>
            <NavLink to="/inventory">
                <a className="nav-links">Inventory</a>
            </NavLink>
        </div>

    )

}

export default NavBar