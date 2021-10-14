import React, { memo, useEffect, useState } from 'react';
import { getPosters, getPostersByCategory } from '../servise/posterService';
import { DateWrapper, Img, PosterInfoWrapper, PostersWrapper, PosterTitle, PosterWrapper } from './postersBlock.styled';
import PosterCount from './postersCount/postersCount.component';
import { MainWrapper } from '../global/globalStyles';
import PosterCategory from './posterCategory/posterCategory.component';
import NavigationCategory from './navigationCategory/navigationCategory.component';
import PropTypes from 'prop-types';

const links = [
  { id: 0, text: 'all' },
  { id: 1, text: 'documentary' },
  { id: 2, text: 'comedy' },
  { id: 3, text: 'horror' },
  { id: 4, text: 'crime' },
];
const PostersBlock = () => {
  const [posters, setPosters] = useState([]);
  const [countPosters, setCountPosters] = useState(0);
  const [activeNav, setActiveNav] = useState(links[0]);

  useEffect(async () => {
    const { count, posters } = activeNav === links[0] ? await getPosters() : await getPostersByCategory(activeNav.text);
    setPosters(posters);
    setCountPosters(count);
  }, [activeNav]);

  return (
    <>
      <MainWrapper>
        <NavigationCategory links={links} setActive={setActiveNav} activeNav={activeNav} />
        <PosterCount count={countPosters} />
        <ListPosters posters={posters} />
      </MainWrapper>
    </>
  );
};

export default PostersBlock;

const ListPosters = memo(({ posters }) => (
  <PostersWrapper>
    {posters.map(poster => (
      <PosterWrapper key={poster.id}>
        <Img src={poster.poster_path} alt={poster.title} />
        <PosterInfoWrapper>
          <PosterTitle>{poster.title}</PosterTitle>
          <DateWrapper>{poster.release_date.slice(0, 4)}</DateWrapper>
        </PosterInfoWrapper>
        <PosterCategory genres={poster.genres} />
      </PosterWrapper>
    ))}
  </PostersWrapper>
));

ListPosters.displayName = 'ListPosters';

ListPosters.propTypes = {
  posters: PropTypes.arrayOf(
    PropTypes.shape({
      budget: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.number.isRequired,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
      tagline: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    }),
  ),
};

ListPosters.defaultProps = {
  posters: [],
};
