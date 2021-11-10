import React, { memo } from 'react';
import { Main } from '../global/globalStyles';
import NavigationCategory from './navigationCategory/navigationCategory.component';
import ListPosters from './listPosters.connector';
import PosterCountComponent from './postersCount/postersCount.connector';

const PostersArea = () => (
  <>
    <Main>
      <NavigationCategory />
      <PosterCountComponent />
      <ListPosters />
    </Main>
  </>
);
export default memo(PostersArea);
