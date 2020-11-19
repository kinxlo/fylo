import React from 'react';

//imports for images...
import logo from '../images/logo.svg'
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
    render() {

        return(
            <nav className = "nav">
                <div>
                    <img src={logo} alt="brand-logo" className="logoBrand"/>
                </div>
                <ul>
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/SignIn">Sign in</NavLink></li>
                    <li><NavLink to = "/Post">Post</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;