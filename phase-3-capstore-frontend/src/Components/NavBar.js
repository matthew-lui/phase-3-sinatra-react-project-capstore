import React, { useState } from "react"
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-div">
            <h1 className="nav-title">Hat Club</h1>
            <NavLink className="nav-links" to="/">
                Home
            </NavLink>
            <NavLink className="nav-links" to="/Stores">
                Stores
            </NavLink>
            <NavLink className="nav-links" to="/inventory">
                Inventory
            </NavLink>
        </div>

    )

}

export default NavBar