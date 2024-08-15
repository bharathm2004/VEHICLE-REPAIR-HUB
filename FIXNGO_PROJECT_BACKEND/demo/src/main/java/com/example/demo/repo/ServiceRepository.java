package com.example.demo.repo;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Service;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
