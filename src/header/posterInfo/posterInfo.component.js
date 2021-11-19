import React, { useEffect } from 'react';
import { Img } from '../../postersBlock/postersBlock.styled';
import PosterCategoryComponent from '../../postersBlock/posterCategory/posterCategory.component';
import { convertMinsToHrsMins } from '../../global/helpers';
import {
  PosterDetail,
  PosterDetailDate,
  PosterDetailHeader,
  PosterDetailLeftBlock,
  PosterDetailOverview,
  PosterDetailRightBlock,
  PosterDetailTimes,
  PosterDetailTitle,
  PosterDetailVoteAverage,
} from './posterInfo.styled';
import PropTypes from 'prop-types';

const PosterInfoComponent = ({ posterId, getPosterById, poster }) => {
  useEffect(() => {
    getPosterById(posterId);
  }, [posterId]);

  return (
    poster && (
      <PosterDetail>
        <PosterDetailRightBlock>
          <Img src={poster.poster_path} alt={poster.title} loading={'lazy'} />
        </PosterDetailRightBlock>
        <PosterDetailLeftBlock>
          <PosterDetailHeader>
            <PosterDetailTitle>{poster.title}</PosterDetailTitle>
            <PosterDetailVoteAverage>{poster.vote_average}</PosterDetailVoteAverage>
          </PosterDetailHeader>
          <PosterCategoryComponent genres={poster.genres} />
          <PosterDetailTimes>
            <PosterDetailDate>{poster.release_date.slice(0, 4)}</PosterDetailDate>
            <PosterDetailDate>{convertMinsToHrsMins(poster.runtime)}</PosterDetailDate>
          </PosterDetailTimes>
          <PosterDetailOverview>{poster.overview}</PosterDetailOverview>
        </PosterDetailLeftBlock>
      </PosterDetail>
    )
  );
};
export default PosterInfoComponent;

PosterInfoComponent.propTypes = {
  posterId: PropTypes.number.isRequired,
  getPosterById: PropTypes.func.isRequired,
  poster: PropTypes.shape({
    id: PropTypes.number,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number,
  }),
};
