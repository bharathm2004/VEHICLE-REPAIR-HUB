// package com.example.demo.controller;

// import com.example.demo.model.Feedback;
// import com.example.demo.service.FeedbackService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/feedback")
// public class FeedbackController {

//     @Autowired
//     private FeedbackService feedbackService;

//     @PostMapping
//     public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback) {
//         Feedback createdFeedback = feedbackService.addFeedback(feedback);
//         return new ResponseEntity<>(createdFeedback, HttpStatus.CREATED);
//     }

//     @GetMapping
//     public ResponseEntity<List<Feedback>> getAllFeedbacks() {
//         List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
//         return new ResponseEntity<>(feedbacks, HttpStatus.OK);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
//         Feedback feedback = feedbackService.getFeedbackById(id);
//         if (feedback == null) {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//         return new ResponseEntity<>(feedback, HttpStatus.OK);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
//         feedbackService.deleteFeedback(id);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }

package com.example.demo.controller;

import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<String> addFeedback(@RequestBody Feedback feedback) {
        try {
             feedbackService.addFeedback(feedback);
            return new ResponseEntity<>("Feedback created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            // Log the exception if needed
            return new ResponseEntity<>("Failed to create feedback. Please try again.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
