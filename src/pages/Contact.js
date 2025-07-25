import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    if (!name || !email || !message) {
      return 'Name, email, and message are required.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address.';
    }
    if (rating === 0) {
      return 'Please provide a rating.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    // In a real app, you would send this data to a server
    console.log({ name, email, message, rating, feedback });

    // Reset form and show success message
    setName('');
    setEmail('');
    setMessage('');
    setRating(0);
    setFeedback('');
    setSubmitted(true);
  };

  return (
    <div className="contact-section">
      <div className="contact-box">
        <h2>Contact Us & Feedback</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="input-field"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* Rating Section */}
          <div className="rating-section">
            <h3>Rate Your Experience</h3>
            <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                className={`star ${(hovered || rating) >= star ? 'active' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          </div>

          <textarea
            placeholder="Optional: Tell us more about your experience..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="3"
            className="input-field"
          />

          <button type="submit" className="submit-button">
            Submit Feedback
          </button>

          {error && <p className="feedback-message error">{error}</p>}
          {submitted && !error && (
            <p className="feedback-message success">✅ Thank you for your feedback!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
