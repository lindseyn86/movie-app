import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <p>{review.review}</p>
      <p>Reviewed By: <strong>{review.username}</strong> </p>
    </div>
  );
};

export default Review;
