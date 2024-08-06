
package com.example.demo.service;

import com.example.demo.model.Feedback;
import com.example.demo.repository.FeedbackRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;

    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

}
