import React from "react";
import Module from './Header.module.css'
import { Link } from "react-router-dom";

const Header = function(){
    return (
        <header className={Module.header}>
            <ul>

          <li><Link className={module.links} to="/">GoalSetter</Link></li>
          <li><Link className={module.links} to="/login">Login</Link></li>
          <li><Link className={module.links} to="/register">Register</Link></li>
            </ul>
        </header>
    )
}

export default Header