import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [username, setUsername] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ username, review });
    setUsername('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      /><br/>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review..."
        required
      ></textarea><br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
