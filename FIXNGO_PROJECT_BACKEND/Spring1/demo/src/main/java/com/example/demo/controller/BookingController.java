// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Booking;
// import com.example.demo.service.BookingService;
// // @RestController
// // @RequestMapping("/api/bookings")
// // public class BookingController {
// //     @Autowired
// //     private BookingService bookingService;

// //     @PostMapping
// //     public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
// //         Booking createdBooking = bookingService.createBooking(booking);
// //         return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
// //     }
// // }
// @RestController
// @RequestMapping("/api/bookings")  // Ensure this path is correct
// public class BookingController {
//     @Autowired
//     private BookingService bookingService;

//     @PostMapping
//     public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
//         Booking createdBooking = bookingService.createBooking(booking);
//         return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
//     }
// }


package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Booking;
import com.example.demo.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<String> createBooking(@RequestBody Booking booking) {
        bookingService.createBooking(booking);
        return new ResponseEntity<>("Booking Successful", HttpStatus.CREATED);
    }
}
