package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    // Get user by email
    public User getByEmail(String email) {
        return userRepo.findByEmail(email).orElse(null);
    }


     // User profile update functionality
     public Boolean updateProfile(String email, User user) {
        User existingUser = getByEmail(email);
        if (existingUser == null) {
            return false;
        }
        try {
            // Update user details
            existingUser.setName(user.getName());
            existingUser.setPhone(user.getPhone());
            existingUser.setAddress(user.getAddress());
            existingUser.setPassword(user.getPassword());
            userRepo.save(existingUser);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    // User delete account functionality
    public Boolean deleteAccount(String email) {
        User existingUser = getByEmail(email);
        if (existingUser == null) {
            return false;
        }
        try {
            userRepo.delete(existingUser);
        } catch (Exception e) {
            return false;
        }
        return true;
    }
}
