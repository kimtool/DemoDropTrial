//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON. 
//It's also protecting you by default against cross-site request forgery (XSRF).
//Promise based HTTP client for the browser and node.js
import axios from "axios"
import {API_URL} from "../../Constants"

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser"

//When user is succesfully logged in, we create a key to save in session storage
class AuthenticationService {   

//when a user logged in, call the jwt authenticate service
//no need for a header, send a post request with username and password
    executeJwtAuthenticationService(username, password){        
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }   
    
    createJwtToken(token){
        return "Bearer " + token
    } 

    registerSuccessfulLoginForJws(username, token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
//every http request from now on needs to use the token, wich came in response
//token is created in backend
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

//token is deleted when user loggs out
    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

//check if user is logged in to use it througtout the application
    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) return false
        return true
    }

    getLoggedInUsername(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) return ""
        return user
    }

    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}

export default new AuthenticationService()
