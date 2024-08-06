package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Auto-generated ID for Booking entity
    
    @Column(nullable = false)
    private String username;
    
    @Column(nullable = false)
    private String phone;
    
    @Column(nullable = false)
    private String vehicleNumber;
    
    @Column(nullable = false)
    private String service;
    
    @Column(nullable = false)
    private String problemDescription;
    
    @Column(nullable = false)
    private String date;
    
    @Column(nullable = false)
    private String time;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)

    private User user;
    
    public Booking(String username, String phone, String vehicleNumber, String service, String problemDescription,
            String date, String time, User user) {
        this.username = username;
        this.phone = phone;
        this.vehicleNumber = vehicleNumber;
        this.service = service;
        this.problemDescription = problemDescription;
        this.date = date;
        this.time = time;
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Booking() {
    }

    public String getusername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPhone() {
        return phone;
    }
    
    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public String getVehicleNumber() {
        return vehicleNumber;
    }
    
    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }
    
    public String getService() {
        return service;
    }
    
    public void setService(String service) {
        this.service = service;
    }
    
    public String getProblemDescription() {
        return problemDescription;
    }
    
    public void setProblemDescription(String problemDescription) {
        this.problemDescription = problemDescription;
    }
    
    public String getDate() {
        return date;
    }
    
    public void setDate(String date) {
        this.date = date;
    }
    
    public String getTime() {
        return time;
    }
    
    public void setTime(String time) {
        this.time = time;
    }
}
