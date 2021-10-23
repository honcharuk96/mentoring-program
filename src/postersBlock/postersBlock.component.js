import React, { useEffect, useState } from 'react';
import { getPosters, getPostersByCategory } from '../servise/posterService';
import PosterCount from './postersCount/postersCount.component';
import { Main } from '../global/globalStyles';
import NavigationCategory from './navigationCategory/navigationCategory.component';
import ListPosters from './listPosters.component';

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
  const [activeNav, setActiveNav] = useState(()=> links[0]);

  useEffect(async () => {
    const { count, posters } = activeNav === links[0] ? await getPosters() : await getPostersByCategory(activeNav.text);
    setPosters(posters);
    setCountPosters(count);
  }, [activeNav]);

  return (
    <>
      <Main>
        <NavigationCategory links={links} setActive={setActiveNav} activeNav={activeNav} />
        <PosterCount count={countPosters} />
        <ListPosters posters={posters} />
      </Main>
    </>
  );
};

export default PostersBlock;


