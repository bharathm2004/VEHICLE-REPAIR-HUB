
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get user by email
    @GetMapping
    public User getProfile(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    // Update user
    @PutMapping
    public User updateProfile(@RequestBody User user) {
        return userService.updateUser(user);
    }


@DeleteMapping("delete/{id}")
public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {
    try {
        userService.deleteUser(id); // Service method to delete user
        return ResponseEntity.ok("User deleted successfully");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user");
    }
}

}
