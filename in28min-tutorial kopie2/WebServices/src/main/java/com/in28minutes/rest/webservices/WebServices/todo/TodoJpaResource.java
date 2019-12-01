/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.rest.webservices.WebServices.todo;

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
public class TodoJpaResource {
    
    @Autowired
    private TodoHardcodedService todoService;
    
    @Autowired
    private TodoJpaRespository TodoJpaRespository;
    
    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return TodoJpaRespository.findByUsername(username);
        //return todoService.findAll();
    }    
    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return TodoJpaRespository.findById(id).get();
        //return todoService.findById(id);
    } 
    
    //DELETE /users/{username}/todos/{id}
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        TodoJpaRespository.deleteById(id);
        
        return ResponseEntity.noContent().build();           
    }
    
//    //Edit/Update a Todo
    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username, 
            @PathVariable long id, @RequestBody Todo todo){
        todo.setUsername(username);
        Todo todoUpdated = TodoJpaRespository.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK); //gives more options in the future if you want to return other statusses
    }
    
//    @PutMapping("/users/{username}/todos/{id}")
//    public Todo updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
//        Todo todoUpdated = todoService.save(todo);
//        return todoUpdated;
//    }

    //Create a new Todo
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
            @PathVariable String username, @RequestBody Todo todo){ 
    
    //when saving todo details, details contain username. Set username into todo
        todo.setUsername(username);
        Todo createdTodo = TodoJpaRespository.save(todo);
        
        //Location
        ///users/{username}/todos{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }       
    
}
