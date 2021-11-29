import React, { memo } from 'react';
import { Date, Poster, PosterInfo, PosterTitle } from './postersBlock.styled';
import PropTypes from 'prop-types';
import PosterCategoryComponent from './posterCategory/posterCategory.component';
import { LazyImage } from '../global/components/lazyImage/lazyImage.compoent';
import {useRouter} from 'next/router';

const PosterComponent = ({ id, src, alt, title, date, genres, setSelectedPoster }) => {

  const router = useRouter()
  const clickOnPoster = posterId => {
    router.push({
      pathname: '/search',
      query: {...router.query, movie:posterId},
    });
    setSelectedPoster(posterId);
  };
  return (
    <Poster key={id} id={id} onClick={() => clickOnPoster(id)}>
      <LazyImage key={id} src={src} alt={alt} />
      <PosterInfo>
        <PosterTitle>{title}</PosterTitle>
        <Date>{date.slice(0, 4)}</Date>
      </PosterInfo>
      <PosterCategoryComponent genres={genres} />
    </Poster>
  );
};

export default memo(PosterComponent);

PosterComponent.propTypes = {
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string,
  date: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setSelectedPoster: PropTypes.func.isRequired,
};
