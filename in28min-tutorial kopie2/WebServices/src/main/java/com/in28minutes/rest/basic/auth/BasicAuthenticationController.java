
package com.in28minutes.rest.basic.auth;

import com.in28minutes.rest.webservices.WebServices.helloworld.*;
import org.springframework.web.bind.annotation.*;

//Controller
@RestController
//http://localhost:4200
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
       
    @GetMapping(path="/basicauth")
    public AuthenticationBean helloWorldBean(){
        return new AuthenticationBean("You are authenticated");
    }
    
    //@RequestMapping(method=RequestMethod.GET, path="/hello-world")
//    @GetMapping(path="/hello-world")
//    public String helloWorld(){
//        return "Hello World";
//    }
    
//    //hello-world-bean
//    @GetMapping(path="/hello-world-bean")
//    public AuthenticationBean helloWorldBean(){
//        return new AuthenticationBean("Hello World");
//    }
    
//    @GetMapping(path="/hello-world/path-variable/{name}")
//    public AuthenticationBean helloWorldPathVariable(@PathVariable String name){
//        //throw new RuntimeException("Something went wrong");
//        return new AuthenticationBean(String.format("Hello World, %s", name));
//    }
    
}
