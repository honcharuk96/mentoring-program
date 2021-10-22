import React from 'react';
import { hot } from 'react-hot-loader';
import HeaderComponent from './header/header.component';
import GlobalStyles from './global/globalStyles';
import FooterComponent from './footer/footer.component';
import PostersBlock from './postersBlock/postersBlock.component';
import ErrorBoundary from './global/components/errorComponent/errorBoundary.component';

const App = () => (
  <>
    <ErrorBoundary>
      <GlobalStyles />
      <HeaderComponent />
      <PostersBlock />
      <FooterComponent />
    </ErrorBoundary>
  </>
);

export default hot(module)(App);
