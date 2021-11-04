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
  const [poster, setPoster] = useState({
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: 0,
    genres: [],
    runtime: '',
    overview: '',
  });
  useEffect( () => {
    async function getPoster(){
      const { poster } = await getPosterById(posterId.posterId);
      setPoster(poster);
    }
    getPoster();
  }, [posterId]);

  return (
    <>
      <PosterDetail>
        <PosterDetailRightBlock>
          <Img src={poster.poster_path} alt={poster.title} />
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
    </>
  );
};
