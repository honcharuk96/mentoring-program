import React, { memo, useContext } from 'react';
import { PosterCount } from './postersCount.styled';
import PropTypes from 'prop-types';
import { Bold } from '../../global/globalStyles';
import { AppContext } from '../../App';

const PosterCountComponent = () => {
  const { postersInfo } = useContext(AppContext);
  return (
    <PosterCount>
      <Bold>
        <span>{postersInfo.countPosters}</span>
      </Bold>
      {postersInfo.countPosters ? ' movies' : ' movie'} found
    </PosterCount>
  );
};

export default memo(PosterCountComponent);

PosterCountComponent.propTypes = {
  count: PropTypes.number.isRequired,
};
PosterCountComponent.defaultProps = {
  count: 0,
};
