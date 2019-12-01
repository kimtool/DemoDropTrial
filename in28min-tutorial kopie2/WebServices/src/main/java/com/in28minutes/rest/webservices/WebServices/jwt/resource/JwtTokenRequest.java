/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.rest.webservices.WebServices.jwt.resource;

import java.io.Serializable;

/**
 *
 * @author Gebruiker
 */

//contains username/password

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU3NDMzOTgwMSwiaWF0IjoxNTczNzM1MDAxfQ.7Ei6QXIZc_j7Y6tP_cpl1iopOFG5Zlxs207HJ_o8_VYwUn-i86k_kIJ30za3W0zQcLgem_h01GFtNQMbL2JQ8w"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
