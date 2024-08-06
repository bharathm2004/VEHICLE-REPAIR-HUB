package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;
@Service
@Transactional
public class BookingService {
     @Autowired
    private BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

}
