import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to={`/${props.topics[0]}`}> {props.topics[0]} </NavLink></li>
                    <li><NavLink to={`/${props.topics[1]}`}> {props.topics[1]} </NavLink></li>
                    <li><NavLink to={`/${props.topics[2]}`}> {props.topics[2]} </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
