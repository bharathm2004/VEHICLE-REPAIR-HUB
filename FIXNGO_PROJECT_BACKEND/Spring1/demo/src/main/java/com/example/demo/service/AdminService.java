package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.model.Feedback;
import com.example.demo.model.User;
import com.example.demo.repository.AdminRepo;
import com.example.demo.repository.FeedbackRepo;
import com.example.demo.repository.UserRepo;

@Service
public class AdminService {

    @Autowired
    AdminRepo adminRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    FeedbackRepo feedbackRepo;

    // add admins
    public Admin addAdmin(Admin admin)
    {
       return adminRepo.save(admin);
    }

    // get admins 
    public List<Admin> getadmins()
    {
       return adminRepo.findAll();
    }

    //get admin by id
    public Admin adminById(int admin_id)
    {
       return adminRepo.findById(admin_id).orElse(null);
    }
 
     //delete admin
     public boolean deleteAdmin(int admin_id)
     {
         if(this.adminById(admin_id)==null)
         {
             return false;
         }
         adminRepo.deleteById(admin_id);
         return true;
     }
    
     // get user 
    public List<User> getusers()
    {
       return userRepo.findAll();
    }

    // Get user by ID
    public User getUserById(Long userId) {
        return userRepo.findById(userId).orElse(null);
    }

    // Delete user by ID
    public boolean deleteUserById(Long userId) {
        if (userRepo.findById(userId).isEmpty()) {
            return false;
        }
        userRepo.deleteById(userId);
        return true;
    }
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    public Feedback getFeedbackById(Long id) {
        return feedbackRepo.findById(id).orElse(null);
    }

    public void deleteFeedback(Long id) {
        feedbackRepo.deleteById(id);
    }
}
