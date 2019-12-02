import React, {Component} from 'react'
import Hexagon_logo_vector from '../images/Hexagon logo Don Diablo vector FillWhite.png'
import {Link} from 'react-router-dom'
import {SERVER_URL} from './constants.js';
import '../../App.css'

//control component the React component that renders a form 
//also controls what happens in that form on subsequent user input (this.state)
class LoginComponent extends Component {    
    constructor(props){
        super(props);
        this.state = { users: []};
    }

    // const [demo, setDemo] = useState({
    //     name:'', email: '', password: ''});

//handles change for all input fields
    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }

    // let data = new FormData();
    //     data.append('file', this.state.file);
    //     data.append('name', this.state.file.name);

    fetchDemos=()=>{
        fetch(`${SERVER_URL}/members`)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                users: responseData._embedded.members,
            });
        }).catch(err => console.error(err));
    }

    addUser(user){
        fetch(`${SERVER_URL}/members`, {method: 'POST', headers: {"Content-Type": "application/json",},
    body:JSON.stringify(user)})
    .then(res => this.fetchDemos())
    .catch(err => console.error(err))
    }     

    // registerClicked = () => {
    //     props.addUser(user);
    // }

    render(){
        return (
            <>                
                <img id="Hexagon_logo_vector" alt="" src={Hexagon_logo_vector}/>
                <div id="register_block">
{/* if condition is true, div will be executed */}
                {this.state.wasLoginSuccesful && <div>Login Succesful</div>}
                {this.state.showErrorMessage && <div className="alert alert-warning">Invalid Login</div>}
                    <div id="fields">
                        <div id="login_padding">
                            <input type="text" className="field" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/><br/>
                            <input type="email" className="field" name="email" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" required/><br/>
                            <input type="password" className="field" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required/><br/>
                            {/* <input type="password" className="field" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Confirm password" required/>       */}
                        </div>
                    </div>
                    <div className="right_align">
                        {/* <a href="ForgotPasswordPage.html" target="blank" style={{color: "white"}}>Forgot password?</a><br/> */}
                        <Link className="menu-icon" to="/login" target="blank" style={{color: "white"}}>Login</Link>
                    </div>              
                </div> 
                <button className="button" onClick={this.addUser}>Register</button>
            </>
        );
    }
}

export default LoginComponent