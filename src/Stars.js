// src/Stars.js
import React from 'react';

const Stars = ({ rating, setRating }) => {
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
