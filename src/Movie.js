import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


//movie constants
const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);
  const [rating, setRating] = useState(movie.rating);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };


 //movie app 
  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars rating={rating} setRating={setRating} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;
