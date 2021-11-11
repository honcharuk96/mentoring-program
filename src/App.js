import React, { createContext, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import HeaderComponent from './header/header.connector';
import GlobalStyles from './global/globalStyles';
import FooterComponent from './footer/footer.component';
import PostersArea from './postersBlock/postersBlock.component';
import ErrorBoundary from './global/components/errorComponent/errorBoundary.component';
import { BigLine } from './global/components/bigLine/bigLine.styled';
import { links } from './global/constants/global.constants';
import PropTypes from 'prop-types';

export const AppContext = createContext(null);
const App = ({ getPostersByCategory, getPosters, activeNav}) => {
  const [submitForm, setSubmitForm] = useState({ form: null });
  // const [activeNav, setActiveNav] = useState(() => links[0]);

  useEffect(() => {
    console.log('activeNav' + activeNav);
    if (activeNav === links[0]) {
      getPostersByCategory();
      getPosters();
    } else {
      getPostersByCategory(activeNav.text);
    }
  }, [activeNav, submitForm]);

  return (
    <>
      <ErrorBoundary>
        <GlobalStyles />
        <AppContext.Provider
          value={{
            setSubmitForm,
          }}
        >
          <HeaderComponent />
          <BigLine />
          <PostersArea />
        </AppContext.Provider>
        <FooterComponent />
      </ErrorBoundary>
    </>
  );
};

export default hot(module)(App);

App.propTypes = {
  getPosters: PropTypes.func.isRequired,
  getPostersByCategory: PropTypes.func.isRequired,
};
