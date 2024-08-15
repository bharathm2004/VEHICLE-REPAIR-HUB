package com.example.demo.service;

import com.example.demo.model.Service;
import com.example.demo.repo.ServiceRepository;

import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;

@org.springframework.stereotype.Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    public Service getServiceById(Long id) {
        return serviceRepository.findById(id).orElseThrow(() -> new RuntimeException("Service not found"));
    }

    public Service createService(Service service) {
        return serviceRepository.save(service);
    }

    public Service updateService(Long id, Service service) {
        Service existingService = getServiceById(id);
        existingService.setTitle(service.getTitle());
        existingService.setDescription(service.getDescription());
        existingService.setIcon(service.getIcon());
        existingService.setCost(service.getCost());
        return serviceRepository.save(existingService);
    }

    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
}
