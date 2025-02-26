import React from 'react'
import { NavLink } from "react-router-dom"
import "./style.css"

function Navbar() {
    return (

        <nav className='navf'>
            <div className='div1'>
                <h3>Job Search</h3>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="myacount">MyAcount</NavLink>
            </div>
            <div className='div2'>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/singup">Sing Up</NavLink>
            </div>
        </nav>
    )
}

export default Navbar