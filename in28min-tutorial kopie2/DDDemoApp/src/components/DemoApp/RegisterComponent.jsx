import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Hexagon_logo_vector from '../images/Hexagon logo Don Diablo vector FillWhite.png'
import UserDataService from '../api/UserDataService.js'
import {Link} from 'react-router-dom'
import '../../App.css'

//control component the React component that renders a form 
//also controls what happens in that form on subsequent user input (this.state)
class RegisterComponent extends Component {    
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            username: "",
            email: "",
            password: ""
        }
    }

    // componentDidMount(){
    // if(this.state.id===-1){
    //     return
    // }
        
    //     UserDataService.retrieveUser(this.state.id)
    //     .then(response => this.setState({
    //         username: response.data.username,
    //         email: response.data.email,
    //         password: response.data.password
    //     }))
    // }

    validate = (values) => {
        let errors = {}
        if(!values.username){
            errors.username = "Enter a username"
        } if(!values.email){
            errors.email = "Enter a email"
        } if(!values.password){
            errors.password = "Enter a password"
        } // else if(values.description.length<5){
        //     errors.description = "Enter at least 5 characters"
        // } 
        return errors;
    }

    onSubmit = (values) =>{
        //console.log(values);
        let user = {id: this.state.id,
                    username: values.username,
                    email: values.email, 
                    password: values.password}
        
            UserDataService.createUser(user)        //create user
                .then(() => this.props.history.push("/login"))        //go back to
                console.log("submit succes");        
    }

    render(){
        let {username, email, password} = this.state

        return <div>
            {/* <h1 className="title">UPLOAD DEMO</h1> */}
            <div>
                <Formik                     
                    // initialValues={{description: description, targetDate: targetDate}}
                    initialValues={{username, email, password}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >        
                    {(props) => (
                        <Form>
                            <ErrorMessage name="username" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="email" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="password" component="div" className="alert alert-warning"/>
                            <div className="container">
                            <fieldset className="form-group">
                                <label>Username</label>
                                <Field autoComplete="off" className="form-control" type="text" name="username"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>E-mail</label>
                                <Field autoComplete="off" className="form-control" type="email" name="email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Password</label>
                                <Field autoComplete="off" className="form-control" type="password" name="password"/>
                            </fieldset>
                            <button className="button" type="submit">Save</button>
                            </div>
                        </Form>                        
                    )}
                </Formik>                
            </div>            
        </div>
    }    




//     render(){
//         return (
//             <>                
//                 <img id="Hexagon_logo_vector" alt="" src={Hexagon_logo_vector}/>
//                 <div id="register_block">
// {/* if condition is true, div will be executed */}
//                 {this.state.wasLoginSuccesful && <div>Login Succesful</div>}
//                 {this.state.showErrorMessage && <div className="alert alert-warning">Invalid Login</div>}
//                     <div id="fields">
//                         <div id="login_padding">
//                             <input type="text" className="field" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/><br/>
//                             <input type="email" className="field" name="email" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" required/><br/>
//                             <input type="password" className="field" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required/><br/>
//                             {/* <input type="password" className="field" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Confirm password" required/>       */}
//                         </div>
//                     </div>
//                     <div className="right_align">
//                         {/* <a href="ForgotPasswordPage.html" target="blank" style={{color: "white"}}>Forgot password?</a><br/> */}
//                         <Link className="menu-icon" to="/login" target="blank" style={{color: "white"}}>Login</Link>
//                     </div>              
//                 </div> 
//                 <button className="button" type="submit">Register</button>
//             </>
//         );
//     }
}

export default RegisterComponent