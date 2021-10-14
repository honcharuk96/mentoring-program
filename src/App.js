import React from 'react';
import { hot } from 'react-hot-loader';
import HeaderComponent from './header/header.component';
import GlobalStyles from './global/globalStyles';
import FooterComponent from './footer/footer.component';
import PostersBlock from './postersBlock/postersBlock.component';

const App = () => (
  <>
    <GlobalStyles />
    <HeaderComponent />
    <PostersBlock />
    <FooterComponent />
  </>
);

export default hot(module)(App);
