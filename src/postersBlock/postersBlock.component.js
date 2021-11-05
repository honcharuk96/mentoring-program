import React, { memo } from 'react';
import PosterCount from './postersCount/postersCount.component';
import { Main } from '../global/globalStyles';
import NavigationCategory from './navigationCategory/navigationCategory.component';
import ListPosters from './listPosters.component';

const PostersArea = () => (
  <>
    <Main>
      <NavigationCategory />
      <PosterCount />
      <ListPosters />
    </Main>
  </>
);
export default memo(PostersArea);
