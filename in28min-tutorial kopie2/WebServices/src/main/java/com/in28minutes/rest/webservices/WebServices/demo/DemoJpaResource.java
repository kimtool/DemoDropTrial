package com.in28minutes.rest.webservices.WebServices.demo;

import com.in28minutes.rest.webservices.WebServices.demo.Demo;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 *
 * @author Gebruiker
 */
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DemoJpaResource {    
    
    @Autowired
    private DemoJpaRespository DemoJpaRespository;
    
    @GetMapping("/jpa/users/{username}/demos")
    public List<Demo> getAllDemos(@PathVariable String username){
        return DemoJpaRespository.findByUsername(username);
        //return demoService.findAll();
    }    
    @GetMapping("/jpa/users/{username}/demos/{id}")
    public Demo getDemo(@PathVariable String username, @PathVariable long id){
        return DemoJpaRespository.findById(id).get();
        //return demoService.findById(id);
    } 
    
    //DELETE /users/{username}/demos/{id}
    @DeleteMapping("/jpa/users/{username}/demos/{id}")
    public ResponseEntity<Void> deleteDemo(@PathVariable String username, @PathVariable long id){
        DemoJpaRespository.deleteById(id);
        
        return ResponseEntity.noContent().build();           
    }
    
//    //Edit/Update a Demo
    @PutMapping("/jpa/users/{username}/demos/{id}")
    public ResponseEntity<Demo> updateDemo(
            @PathVariable String username, 
            @PathVariable long id, @RequestBody Demo demo){
        demo.setUsername(username);
        Demo demoUpdated = DemoJpaRespository.save(demo);
        return new ResponseEntity<Demo>(demo, HttpStatus.OK); //gives more options in the future if you want to return other statusses
    }
    
//    @PutMapping("/users/{username}/demos/{id}")
//    public Demo updateDemo(@PathVariable String username, @PathVariable long id, @RequestBody Demo demo){
//        Demo demoUpdated = demoService.save(demo);
//        return demoUpdated;
//    }

    //Create a new Demo
    @PostMapping("/jpa/users/{username}/demos")
    public ResponseEntity<Void> createDemo(
            @PathVariable String username, @RequestBody Demo demo){ 
    
    //when saving demo details, details contain username. Set username into demo
        demo.setUsername(username);
        Demo createdDemo = DemoJpaRespository.save(demo);
        
        //Location
        ///users/{username}/demos{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdDemo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }       
    
}
