import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {Link, withRouter} from 'react-router-dom'
import hexagonlogo from '../images/hexagonlogo_A1_Rectangle_13_pattern.png'
import '../../Header.css'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header className="desktop-header">
                <nav className="menu-bar">                    
                    <ul className="navigation left">
{/* links are only shown when isUserLoggedIn is true */}
                        {isUserLoggedIn && <li><Link className="menu-icon" to="/welcome/Hexagonian">HOME</Link></li>}
                        {isUserLoggedIn && <li><Link className="menu-icon" to="/demos">MY PROFILE</Link></li>}
                    </ul>    
                        <Link to="/welcome/Hexagonian"><img className="hexagonlogo" alt="" src={hexagonlogo}/></Link>
                    <ul className="navigation right">
                        {/* {!isUserLoggedIn && <li><Link className="nav-link menu-icon" to="/login">LOGIN</Link></li>} */}
                        {isUserLoggedIn && <li><Link className="menu-icon"  to="/demos">DEMO'S</Link></li>}
                        {isUserLoggedIn && <li><Link className="menu-icon" to="/logout" onClick={AuthenticationService.logout}>LOG OUT</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
//To ensure that header menus are updated whenever the router is called 
//we need to wrap HeaderComponent with a call to withRouter 
export default withRouter(HeaderComponent) 