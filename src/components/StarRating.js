import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div
      className="testimonial-stars"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
  );
};

export default StarRating;