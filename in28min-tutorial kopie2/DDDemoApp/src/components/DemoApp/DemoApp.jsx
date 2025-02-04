import React, {Component} from 'react'
import '../../App.css'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import RegisterComponent from './RegisterComponent.jsx'
import DemoListComponent from './DemoListComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import AddDemoComponent from './AddDemoComponent.jsx'
import HamburgerMenuComponent from './HamburgerMenuComponent.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//terminal: npm add react-router-dom

class DemoApp extends Component {
    render(){
        return (
            <div className="DemoApp">   
                <Router>
                    <HamburgerMenuComponent/>
                    <HeaderComponent/>      
                    <main style={{marginTop: "80px"}}>
{/* Make sure only one route is used at a time */}
                        <Switch >          
{/* Route defines wich page has wich url, AuthenticatedRoute can only be taken by authenticated users */}                                  
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/register" component={RegisterComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/demos/:id" component={AddDemoComponent}/>
                            <AuthenticatedRoute path="/demos" component={DemoListComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>                        
                            <Route path="" component={ErrorComponent}/>
                        </Switch>
                    </main>
                    <FooterComponent/>
                </Router>               
            </div>
        )
    }
}

export default DemoApp