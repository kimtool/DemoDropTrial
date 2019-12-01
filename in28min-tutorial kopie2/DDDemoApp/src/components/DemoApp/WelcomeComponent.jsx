import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={welcomeMessage:""}
    }

    render(){
        return <div>
            <h1 className="title">Welcome {this.props.match.params.name}!</h1>
            <div className="container">
            </div>
        </div>
    }
}

export default WelcomeComponent