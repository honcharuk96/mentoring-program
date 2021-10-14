import React, { memo } from 'react';
import { PosterCountWrapper } from './postersCount.styled';
import PropTypes from 'prop-types';
import { Bold } from '../../global/globalStyles';

const PosterCount = ({ count }) => (
  <PosterCountWrapper>
    <Bold>
      <span>{count}</span>
    </Bold>
    {count ? ' movies' : ' movie'} found
  </PosterCountWrapper>
);

export default memo(PosterCount);

PosterCount.propTypes = {
  count: PropTypes.number.isRequired,
};
PosterCount.defaultProps = {
  count: 0,
};
