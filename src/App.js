import React from 'react';
import { hot } from 'react-hot-loader';
import HeaderComponent from './header/header.connector';
import GlobalStyles from './global/globalStyles';
import FooterComponent from './footer/footer.component';
import PostersArea from './postersBlock/postersBlock.component';
import ErrorBoundary from './global/components/errorComponent/errorBoundary.component';
import { BigLine } from './global/components/bigLine/bigLine.styled';

const App = () => (
  <>
    <ErrorBoundary>
      <GlobalStyles />
      <HeaderComponent />
      <BigLine />
      <PostersArea />
      <FooterComponent />
    </ErrorBoundary>
  </>
);
export default hot(module)(App);
