import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <NavLink to="#"> Cats </NavLink>
                    <NavLink to="#"> Dogs </NavLink>
                    <NavLink to="#"> Computers </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
