import React, {Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import DemoDataService from '../api/DemoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import '../../App.css'

class AddDemoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate : moment(new Date()).format("YYYY-MM-DD")
        }
    }

    componentDidMount(){
    if(this.state.id===-1){
        return
    }

        let username = AuthenticationService.getLoggedInUsername()
        DemoDataService.retrieveDemo(username, this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate : moment(response.data.targetDate).format("YYYY-MM-DD")
        }))
    }

    validate = (values) => {
        let errors = {}
        if(!values.description){
            errors.description = "Enter a description"
        } else if(values.description.length<5){
            errors.description = "Enter at least 5 characters"
        } if(!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid date"
        }
        return errors;
    }
    onSubmit = (values) =>{
        //console.log(values);
        let username = AuthenticationService.getLoggedInUsername()
        let demo = {username: AuthenticationService.getLoggedInUsername(),
                    id: this.state.id,
                    description: values.description, 
                    targetDate: values.targetDate}

        if(this.state.id===-1){
            DemoDataService.createDemo(username, demo
            // {username: AuthenticationService.getLoggedInUsername(),
            // id: this.state.id,
            // description: values.description, 
            // targetDate: values.targetDate}
            )
                .then(() => this.props.history.push("/demos"))
        }else{
            DemoDataService.updateDemo(username, this.state.id, demo)
                .then(() => this.props.history.push("/demos"))
        }
    }

    render(){
        let {description, targetDate} = this.state
        //let targetDate = this.state.targetDate

        return <div>
            <h1 className="title">UPLOAD DEMO</h1>
            <div>
                <Formik                     
                    // initialValues={{description: description, targetDate: targetDate}}
                    initialValues={{description, targetDate}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >        
                    {(props) => (
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                            <div className="container">
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field autoComplete="off" className="form-control" type="text" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field autoComplete="off" className="form-control" type="date" name="targetDate"/>
                            </fieldset>
                            <button className="button" type="submit">Save</button>
                            </div>
                        </Form>                        
                    )}
                </Formik>                
            </div>            
        </div>
    }    
}

export default AddDemoComponent