import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <Link to="#"> Cats </Link>
                    <Link to="#"> Dogs </Link>
                    <Link to="#"> Computers </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
