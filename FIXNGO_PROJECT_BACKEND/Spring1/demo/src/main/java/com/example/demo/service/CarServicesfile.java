package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CarServices;
import com.example.demo.repository.CarServicesRepo;



@Service
public class CarServicesfile {
    @Autowired
    CarServicesRepo carServicesRepo;

    //add new service
    public CarServices addServices(CarServices carServices)
    {
        return carServicesRepo.save(carServices);
    }

    // Get service by ID
    public CarServices getById(int service_id) {
        return carServicesRepo.findById(service_id).orElse(null);
    }

    // Update service
    public Boolean updateService(int service_id, CarServices updatedService) {
        CarServices existingService = getById(service_id);
        if (existingService == null) {
            return false; // Service not found
        }
        try {
            // Update only the fields that are not null
            if (updatedService.getTitle() != null) existingService.setTitle(updatedService.getTitle());
            if (updatedService.getDescription() != null) existingService.setDescription(updatedService.getDescription());
            if (updatedService.getCost() != null) existingService.setCost(updatedService.getCost());
            if (updatedService.getIcon() != null) existingService.setIcon(updatedService.getIcon());

            // Save the updated service
            carServicesRepo.save(existingService);
        } catch (Exception e) {
            return false; // Update failed
        }
        return true; // Update successful
    }

    //delete service 
    public Boolean deleteService(int service_id) {
        if (getById(service_id) == null) {
            return false;
        }
        carServicesRepo.deleteById(service_id);
        return true;
    }
    
}
