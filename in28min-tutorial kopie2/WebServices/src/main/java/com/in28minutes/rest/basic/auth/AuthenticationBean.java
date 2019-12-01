/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.rest.basic.auth;

import com.in28minutes.rest.webservices.WebServices.helloworld.*;

/**
 *
 * @author Gebruiker
 */
public class AuthenticationBean{
    
    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
