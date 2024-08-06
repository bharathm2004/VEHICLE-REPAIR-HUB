package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PutMapping("/ProfileUpdate/{email}")
    public ResponseEntity<User> put(@PathVariable("email") String email, @RequestBody User user)
    {
        if(userService.updateProfile(email, user)==true)
        {
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

     @DeleteMapping("/DeleteAccount/{email}")
    public ResponseEntity<Boolean> remove(@PathVariable("email") String email)
    {
        if(userService.deleteAccount(email)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }

}
