import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', marginBottom: '10px', width: '250px' }}>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'} alt={movie.Title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;

