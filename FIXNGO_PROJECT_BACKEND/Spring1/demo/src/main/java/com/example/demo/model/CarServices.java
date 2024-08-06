package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class CarServices {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int service_id;
    private String title;
    private String description;
    private String cost;
    private String icon;
    public CarServices(String title, String description, String cost, String icon) {
        
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.icon = icon;
    }
    public CarServices() {
    }
    
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getCost() {
        return cost;
    }
    public void setCost(String cost) {
        this.cost = cost;
    }
    public String getIcon() {
        return icon;
    }
    public void setIcon(String icon) {
        this.icon = icon;
    }
}
