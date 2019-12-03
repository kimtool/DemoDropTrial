package com.in28minutes.rest.webservices.WebServices.jwt.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author Gebruiker
 */

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping ("/members")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping ("/members/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping ("/members")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @PutMapping ("/members/{id}")
    public void updateUser(@RequestBody User user, @PathVariable Long id) {
        userService.updateUser(id, user);
    }

    @DeleteMapping ("/members/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
