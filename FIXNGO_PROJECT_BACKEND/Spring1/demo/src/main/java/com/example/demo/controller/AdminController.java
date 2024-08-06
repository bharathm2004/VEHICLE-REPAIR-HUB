package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Admin;
import com.example.demo.model.Feedback;
import com.example.demo.model.User;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;


    // Add a new admin
    @PostMapping("/add")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        Admin createdAdmin = adminService.addAdmin(admin);
        return new ResponseEntity<>(createdAdmin, HttpStatus.CREATED);
    }

    // Get all admins
    @GetMapping("/all")
    public ResponseEntity<List<Admin>> getAllAdmins() {
        List<Admin> admins = adminService.getadmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    // Get admin by ID
    @GetMapping("/{admin_id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable("admin_id") int adminId) {
        Admin admin = adminService.adminById(adminId);
        if (admin == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    // Delete admin by ID
    @DeleteMapping("/{admin_id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable("admin_id") int adminId) {
        boolean isDeleted = adminService.deleteAdmin(adminId);
        if (!isDeleted) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Get all users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = adminService.getusers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Get user by ID
    @GetMapping("/users/{user_id}")
    public ResponseEntity<User> getUserById(@PathVariable("user_id") Long userId) {
        User user = adminService.getUserById(userId);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // Delete user by ID
    @DeleteMapping("/users/{user_id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable("user_id") Long userId) {
        boolean isDeleted = adminService.deleteUserById(userId);
        if (!isDeleted) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<String> getAllFeedbacks() {
        List<Feedback> feedbacks = adminService.getAllFeedbacks();
        if (feedbacks.isEmpty()) {
            return new ResponseEntity<>("No feedbacks found.", HttpStatus.NOT_FOUND);
        }
        StringBuilder response = new StringBuilder("Feedbacks:\n");
        for (Feedback feedback : feedbacks) {
            response.append("ID: ").append(feedback.getId())
                    .append(", Feedback: ").append(feedback.getFeedback()).append("\n");
        }
        return new ResponseEntity<>(response.toString(), HttpStatus.OK);
    }

    @GetMapping("/getfeedback/{id}")
    public ResponseEntity<String> getFeedbackById(@PathVariable Long id) {
        Feedback feedback = adminService.getFeedbackById(id);
        if (feedback == null) {
            return new ResponseEntity<>("Feedback not found.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("ID: " + feedback.getId() + ", Feedback: " + feedback.getFeedback(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable Long id) {
        if (adminService.getFeedbackById(id) != null) {
            adminService.deleteFeedback(id);
            return new ResponseEntity<>("Feedback deleted successfully.", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>("Feedback not found.", HttpStatus.NOT_FOUND);
    }
}
