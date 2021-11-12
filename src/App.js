import React, { createContext, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import HeaderComponent from './header/header.connector';
import GlobalStyles from './global/globalStyles';
import FooterComponent from './footer/footer.component';
import PostersArea from './postersBlock/postersBlock.component';
import ErrorBoundary from './global/components/errorComponent/errorBoundary.component';
import { BigLine } from './global/components/bigLine/bigLine.styled';
import PropTypes from 'prop-types';

export const AppContext = createContext(null);
const App = ({ getPostersByActiveNavWithSort, activeNav }) => {
  const [submitForm, setSubmitForm] = useState({ form: null });

  useEffect(() => {
    getPostersByActiveNavWithSort()
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
  getPostersByActiveNavWithSort: PropTypes.func.isRequired,
};
