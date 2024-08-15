 package com.example.demo.controller;


import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Booking;
import com.example.demo.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }


    @GetMapping
public ResponseEntity<?> getAllBookings() {
    List<Booking> bookings = bookingService.getAllBookings();
    System.out.println("Total bookings fetched: " + bookings.size());
    return new ResponseEntity<>(bookings, HttpStatus.OK);
}
@GetMapping("/service-bookings")
    public ResponseEntity<?> getServiceBookings() {
        List<Booking> bookings = bookingService.getAllBookings();

        Map<String, Long> serviceCounts = bookings.stream()
            .collect(Collectors.groupingBy(Booking::getService, Collectors.counting()));

        return ResponseEntity.ok(serviceCounts);
    }
}
