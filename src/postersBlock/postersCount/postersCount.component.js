import React, { memo } from 'react';
import { PosterCount } from './postersCount.styled';
import PropTypes from 'prop-types';
import { Bold } from '../../global/globalStyles';

const PosterCountComponent = ({ count }) => (
  <PosterCount>
    <Bold>
      <span>{count}</span>
    </Bold>
    {count ? ' movies' : ' movie'} found
  </PosterCount>
);

export default memo(PosterCountComponent);

PosterCountComponent.propTypes = {
  count: PropTypes.number.isRequired,
};
PosterCountComponent.defaultProps = {
  count: 0,
};
