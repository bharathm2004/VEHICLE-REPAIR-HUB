import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // Rating state
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name, email, feedback, rating }), // Include rating in request
      });

      if (!response.ok) throw new Error('Failed to submit feedback');

      setName('');
      setEmail('');
      setFeedback('');
      setRating(0);
      setSubmitted(true);
      setError(null);

      alert('Thank you for your feedback!'); // Display success alert
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Failed to submit feedback. Please try again.');
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="feedback">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2 className="h">Feedback</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          rows="5"
          required
        />
        <div className="rating">
          <p>Rating:</p>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${rating > index ? 'filled' : ''}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
