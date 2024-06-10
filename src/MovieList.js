// src/MovieList.js
import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Moana',
      image: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg',
      synopsis: 'In ancient Polynesia, when a terrible curse incurred by the demigod Maui reaches Moanas island, she answers the Oceans call to seek out Maui to set things right.',
      rating: 0,
      reviews: [],
    },
    {
      id: 2,
      title: 'A Goofy Movie',
      image: 'https://m.media-amazon.com/images/M/MV5BZDczYjU4MDMtY2RjMy00Y2UyLWE2MmMtZjliYWUwNzQ3YjExXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      synopsis: 'When Max makes a preposterous promise to a girl he has a crush on, his chances to fulfilling it seem hopeless when he is dragged onto a cross-country trip with his embarrassing father, Goofy.',
      rating: 0,
      reviews: [],
    },
    {
      id: 3,
      title: 'Seven',
      image: 'https://m.media-amazon.com/images/M/MV5BZDgyZmY5MmItY2I3Ny00NjA4LWFhNmItMGQ4ZGJhZDk5YjU3XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg',
      synopsis: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
      rating: 0,
      reviews: [],
    },
    {
      id: 4,
      title: 'Step Brothers',
      image: 'https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      synopsis: 'Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.',
      rating: 0,
      reviews: [],
    },
  ]);

  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
