import React from 'react';
import { PosterCategory } from './posterCategory.styled';
import PropTypes from 'prop-types';

const PosterCategoryComponent = ({ genres }) => (
  <PosterCategory>
    {genres.map((genre, index) => (
      <span key={index}>
        {genre}
        {index < genres.length - 1 && ', '}
      </span>
    ))}
  </PosterCategory>
);

export default PosterCategoryComponent;

PosterCategoryComponent.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

PosterCategoryComponent.defaultProps = {
  genres: [],
};
