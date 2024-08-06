package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Admin {

    @Id
    private int admin_id;
    private String name;
    
    
    public Admin() {
    }
    public Admin(int admin_id, String name) {
        this.admin_id = admin_id;
        this.name = name;
    }
    public int getAdmin_id() {
        return admin_id;
    }
    public void setAdmin_id(int admin_id) {
        this.admin_id = admin_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
