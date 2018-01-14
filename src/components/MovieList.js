import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const MovieList = ({movies}) => (
  <div className="container">
    <div className="row">
      {movies.map(movie => (
        <div
          className="col-6"
          key={movie.id}
        >
          <MovieItem
            title={movie.title_english}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            synopsis={movie.synopsis}
          />
        </div>
      ))}
    </div>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
