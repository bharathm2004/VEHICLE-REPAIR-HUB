package com.example.demo.utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import com.example.demo.repository.JwtRepo;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LogoutUtil implements LogoutHandler{

    private final JwtRepo jwtRepo;

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        final String authHeader = request.getHeader(AUTHORIZATION);
        final String token;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        token = authHeader.substring(7);
        var storedToken = jwtRepo.findByToken(token)
                .orElse(null);
        if (storedToken != null) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            jwtRepo.save(storedToken);
            SecurityContextHolder.clearContext();
        }
    }

}
