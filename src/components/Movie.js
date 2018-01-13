import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({title}) => (
  <div>Movie: {title}</div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired
};

export default Movie;
