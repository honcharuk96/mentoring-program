import React from 'react';
import { PosterCategoryWrapper } from './posterCategory.styled';
import PropTypes from 'prop-types';

const PosterCategory = ({ genres }) => (
  <PosterCategoryWrapper>
    {genres.map((genre, index) => (
      <span key={index}>
        {genre}
        {index < genres.length - 1 && ', '}
      </span>
    ))}
  </PosterCategoryWrapper>
);

export default React.memo(PosterCategory);

PosterCategory.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};
