import React from 'react';
import PropTypes from 'prop-types';
// import './MovieItem.css';

const MovieItem = ({title, poster}) => (
  <div className="card">
    <img className="card-img-top" src={poster} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};

export default MovieItem;
