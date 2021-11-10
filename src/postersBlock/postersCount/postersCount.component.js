import React, { memo } from 'react';
import { PosterCount } from './postersCount.styled';
import PropTypes from 'prop-types';
import { Bold } from '../../global/globalStyles';

const PosterCountComponent = ({ numberOfPosters }) => (
  <PosterCount>
    <Bold>
      <span>{numberOfPosters}</span>
    </Bold>
    {numberOfPosters ? ' movies' : ' movie'} found
  </PosterCount>
);

export default memo(PosterCountComponent);

PosterCountComponent.propTypes = {
  numberOfPosters: PropTypes.number.isRequired,
};
PosterCountComponent.defaultProps = {
  count: 0,
};
