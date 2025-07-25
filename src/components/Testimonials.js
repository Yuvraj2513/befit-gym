import React from 'react';
import '../styles/Testimonials.css';
import { testimonials } from '../data/testimonials';
import StarRating from './StarRating';

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">💬 What Our Members Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <StarRating rating={testimonial.rating} />
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
 