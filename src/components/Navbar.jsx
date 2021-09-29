import React, { useState } from "react";
import {Link} from 'react-scroll'

import logo from '../img/logo.png'

function Navbar() {

    const [nav, setNav] = useState(false);

    let changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true)
        }else{
            setNav(false)
        }
    }

    window.onscroll=function() {
        changeBackground()
    }
    return (
        <nav className={nav ? 'nav active': 'nav'}>
            <Link to="##">
                <img src={logo} alt="logo" />
            </Link>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li>
                    <Link to="main">Home</Link>
                </li>
                <li>
                    <Link to="feature">Features</Link>
                </li>
                <li>
                    <Link to="offer">Offer</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
