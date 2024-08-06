package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CarServices;
import com.example.demo.service.CarServicesfile;

@RestController
@RequestMapping("/api/services")
public class CarServiceController{
    @Autowired
    CarServicesfile carServicesfile;

    @PostMapping("/addService")
    public ResponseEntity<CarServices> add(@RequestBody CarServices carServices)
    {
        CarServices obj = carServicesfile.addServices(carServices);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }

    @PutMapping("/updateService/{service_id}")
    public ResponseEntity<CarServices> put(@PathVariable("service_id") int service_id, @RequestBody CarServices updatedService) {
        // Update the service and check if the update was successful
        boolean isUpdated = carServicesfile.updateService(service_id, updatedService);
        
        if (isUpdated) {
            // Retrieve the updated service from the database to return the latest state
            CarServices updatedServiceFromDb = carServicesfile.getById(service_id);
            return new ResponseEntity<>(updatedServiceFromDb, HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

     @DeleteMapping("/deleteService/{service_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("service_id") int service_id)
    {
        if(carServicesfile.deleteService(service_id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
