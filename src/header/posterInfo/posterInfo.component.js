import React, { useEffect, useState } from 'react';
import { getPosterById } from '../../servise/posterService';
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

export const PosterInfoComponent = posterId => {
  const [poster2, setPoster] = useState({
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: 0,
    genres: [],
    runtime: '',
    overview: '',
  });
  useEffect(async () => {
    const { poster } = await getPosterById(posterId.posterId);
    setPoster(poster);
  }, [posterId]);

  return (
    <>
      <PosterDetail>
        <PosterDetailRightBlock>
          <Img src={poster2.poster_path} alt={poster2.title} />
        </PosterDetailRightBlock>
        <PosterDetailLeftBlock>
          <PosterDetailHeader>
            <PosterDetailTitle>{poster2.title}</PosterDetailTitle>
            <PosterDetailVoteAverage>{poster2.vote_average}</PosterDetailVoteAverage>
          </PosterDetailHeader>
          <PosterCategoryComponent genres={poster2.genres} />
          <PosterDetailTimes>
            <PosterDetailDate>{poster2.release_date.slice(0, 4)}</PosterDetailDate>
            <PosterDetailDate>{convertMinsToHrsMins(poster2.runtime)}</PosterDetailDate>
          </PosterDetailTimes>
          <PosterDetailOverview>{poster2.overview}</PosterDetailOverview>
        </PosterDetailLeftBlock>
      </PosterDetail>
    </>
  );
};
