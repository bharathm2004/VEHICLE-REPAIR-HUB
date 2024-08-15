// package com.example.demo.service;

// import com.example.demo.model.User;
// import com.example.demo.repo.UserRepo;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import java.util.Optional;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepo userRepo;

//     public User getUserByEmail(String email) {
//         return userRepo.findByEmail(email)
//             .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
//     }

//     public User updateUser(User user) {
//         if (userRepo.existsById(user.getUid())) {
//             return userRepo.save(user);
//         } else {
//             throw new UsernameNotFoundException("User not found with ID: " + user.getUid());
//         }
//     }

//     public void deleteUser(String email, String password) {
//         Optional<User> userOpt = userRepo.findByEmail(email);
//         if (userOpt.isPresent()) {
//             User user = userOpt.get();
//             if (user.getPassword().equals(password)) {
//                 userRepo.delete(user);
//             } else {
//                 throw new IllegalArgumentException("Incorrect password.");
//             }
//         } else {
//             throw new UsernameNotFoundException("User not found with email: " + email);
//         }
//     }
// }

// package com.example.demo.service;

// import com.example.demo.model.User;
// import com.example.demo.repo.UserRepo;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import java.util.Optional;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepo userRepo;

//     public User getUserByUid(Long uid) {
//         return userRepo.findById(uid)
//             .orElseThrow(() -> new UsernameNotFoundException("User not found with ID: " + uid));
//     }

//     public User updateUser(User user) {
//         if (userRepo.existsById(user.getUid())) {
//             return userRepo.save(user);
//         } else {
//             throw new UsernameNotFoundException("User not found with ID: " + user.getUid());
//         }
//     }

//     public void deleteUser(String email, String password) {
//         Optional<User> userOpt = userRepo.findByEmail(email);
//         if (userOpt.isPresent()) {
//             User user = userOpt.get();
//             if (user.getPassword().equals(password)) {
//                 userRepo.delete(user);
//             } else {
//                 throw new IllegalArgumentException("Incorrect password.");
//             }
//         } else {
//             throw new UsernameNotFoundException("User not found with email: " + email);
//         }
//     }
// }

// package com.example.demo.service;

// import com.example.demo.model.User;
// import com.example.demo.repo.UserRepo;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepo userRepository;

//     // Get user by ID
//     public User getUserById(Long userId) {
//         return userRepository.findById(userId)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//     }

//     // Update user
//     public User updateUser(User user) {
//         // Ensure the user exists before updating
//         if (!userRepository.existsById(user.getUid())) {
//             throw new RuntimeException("User not found");
//         }
//         return userRepository.save(user);
//     }

//     // Delete user
//     public void deleteUser(Long userId, String password) {
//         User user = userRepository.findById(userId)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         // Validate password here if needed
//         if (!user.getPassword().equals(password)) {
//             throw new RuntimeException("Invalid password");
//         }

//         userRepository.deleteById(userId);
//     }
// }

// package com.example.demo.service;

// import com.example.demo.model.User;
// import com.example.demo.repo.UserRepo;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepo userRepository;

//    // Get all users
//    public List<User> getAllUsers() {
//     return userRepository.findAll();
// }

//     // Get user by ID
//     public User getUserById(Long userId) {
//         return userRepository.findById(userId)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//     }

//     // Update user
//     public User updateUser(User user) {
//         // Ensure the user exists before updating
//         if (!userRepository.existsById(user.getUid())) {
//             throw new RuntimeException("User not found");
//         }
//         return userRepository.save(user);
//     }

//     // Delete user
//     public void deleteUser(Long userId, String password) {
//         User user = userRepository.findById(userId)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         // Validate password here if needed
//         if (!user.getPassword().equals(password)) {
//             throw new RuntimeException("Invalid password");
//         }

//         userRepository.deleteById(userId);
//     }
// }
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by email
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Update user
    public User updateUser(User user) {
        // Ensure the user exists before updating
        User existingUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Update the existing user details with the new user details
        existingUser.setName(user.getName());
        existingUser.setPhone(user.getPhone());
        existingUser.setAddress(user.getAddress());
        existingUser.setPassword(user.getPassword()); // Ensure you handle password updates securely

        return userRepository.save(existingUser);
    }

    // In UserService.java

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
}
