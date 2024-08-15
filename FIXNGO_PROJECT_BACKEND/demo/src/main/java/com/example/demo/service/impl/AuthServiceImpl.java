package com.example.demo.service.impl;

// package com.example.demo.service.impl;

// import java.util.HashMap;
// import java.util.Map;
// import java.util.Optional;

// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.demo.dto.request.LoginRequest;
// import com.example.demo.dto.request.RegisterRequest;
// import com.example.demo.dto.response.LoginResponse;
// import com.example.demo.enums.Role;
// import com.example.demo.model.Token;
// import com.example.demo.model.User;
// import com.example.demo.repository.JwtRepo;
// import com.example.demo.repository.UserRepo;
// import com.example.demo.service.AuthService;
// import com.example.demo.utils.JwtToken;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class AuthServiceImpl implements AuthService {

//     private final UserRepo userRepository;
//     private final JwtRepo tokenRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final AuthenticationManager authenticationManager;
//     private final JwtToken jwtUtil;

//     @Override
//     public String register(RegisterRequest registerRequest) {
//         Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
//         if (userExist.isPresent()) {
//             return "User already exists with email id " + registerRequest.getEmail();
//         }
//         var user = User.builder()
//                 .name(registerRequest.getName())
//                 .email(registerRequest.getEmail())
//                 .password(passwordEncoder.encode(registerRequest.getPassword()))
//                 .phone(registerRequest.getPhone())
//                 .address(registerRequest.getAddress())
//                 .role(Role.User)
//                 .build();
//         userRepository.save(user);
//         return "User registered successfully.";
//     }

//     @Override
//     public LoginResponse login(LoginRequest loginRequest) {
//         authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
//         var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
//         Map<String, Object> extraClaims = new HashMap<>();
//         extraClaims.put("role", user.getRole().toString());
//         var accessToken = jwtUtil.generateToken(extraClaims, user);
//         revokeAllUserTokens(user);
//         saveUserToken(user, accessToken);
//         return LoginResponse.builder().accessToken(accessToken).build();
//     }

//     private void saveUserToken(User user, String accessToken) {
//         var token = Token.builder().user(user).token(accessToken).expired(false).revoked(false).build();
//         tokenRepository.save(token);
//     }

//     private void revokeAllUserTokens(User user) {
//         var validUserTokens = tokenRepository.findAllByUser_UidAndExpiredFalseAndRevokedFalse(user.getUid());
//         if (validUserTokens.isEmpty())
//             return;
//         validUserTokens.forEach(token -> {
//             token.setExpired(true);
//             token.setRevoked(true);
//         });
//         tokenRepository.saveAll(validUserTokens);
//     }

//     @Override
//     public String createAdmin() {
//         Optional<User> userExist = userRepository.findByEmail("admin@gmail.com");
//         if (userExist.isPresent()) {
//             return "User already exists with email id - admin@gmail.com";
//         }

//         var user = User.builder()
//                 .name("Admin")
//                 .email("admin@gmail.com")
//                 .password(passwordEncoder.encode("Admin@123"))
    
//                 .role(Role.Admin)
//                 .build();
//         userRepository.save(user);
//         return "Admin registered successfully.";
//     }
// }



import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.LoginResponse;
import com.example.demo.enums.Role;
import com.example.demo.model.Token;
import com.example.demo.model.User;
import com.example.demo.repo.JwtRepo;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.AuthService;
import com.example.demo.utils.JwtToken;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepo userRepository;
    private final JwtRepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtToken jwtUtil;

    @Override
    public String register(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .phone(registerRequest.getPhone())
                .address(registerRequest.getAddress())
                .role(Role.User) // Default role
                .build();
        userRepository.save(user);
        return "User registered successfully.";
    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("role", user.getRole().toString());
        String accessToken = jwtUtil.generateToken(extraClaims, user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);

        return LoginResponse.builder()
                            .accessToken(accessToken)
                            .role(user.getRole().toString())
                            .build();
    }

    private void saveUserToken(User user, String accessToken) {
        var token = Token.builder()
                         .user(user)
                         .token(accessToken)
                         .expired(false)
                         .revoked(false)
                         .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_UidAndExpiredFalseAndRevokedFalse(user.getUid());
        if (validUserTokens.isEmpty()) return;
        
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public String createAdmin() {
        Optional<User> userExist = userRepository.findByEmail("admin@gmail.com");
        if (userExist.isPresent()) {
            return "User already exists with email id - admin@gmail.com";
        }

        var user = User.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("Admin@123"))
                .role(Role.Admin) // Admin role
                .build();
        userRepository.save(user);
        return "Admin registered successfully.";
    }
}
