import React, { createContext, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import HeaderComponent from './header/header.component';
import GlobalStyles from './global/globalStyles';
import FooterComponent from './footer/footer.component';
import PostersArea from './postersBlock/postersBlock.component';
import ErrorBoundary from './global/components/errorComponent/errorBoundary.component';
import { getPosters, getPostersByCategory } from './servise/posterService';
import { BigLine } from './global/components/bigLine/bigLine.styled';

const links = [
  { id: 0, text: 'all' },
  { id: 1, text: 'documentary' },
  { id: 2, text: 'comedy' },
  { id: 3, text: 'horror' },
  { id: 4, text: 'crime' },
];

export const AppContext = createContext(null);
const App = () => {
  const [posters, setPosters] = useState([]);
  const [countPosters, setCountPosters] = useState(0);
  const [selectedPoster, setSelectedPoster] = useState(false);
  const [submitForm, setSubmitForm] = useState({ form: null });
  const [activeNav, setActiveNav] = useState(() => links[0]);

  useEffect(async () => {
    let data;
    if( activeNav === links[0]) {
      data = await getPosters()
    } else {
      data = await getPostersByCategory(activeNav.text);
    }

    setPosters(data.posters);
    setCountPosters(data.count);
  }, [activeNav, submitForm]);

  return (
    <>
      <ErrorBoundary>
        <GlobalStyles />
        <AppContext.Provider
          value={{
            postersInfo: { posters, countPosters },
            nav: { links, setActiveNav, activeNav },
            posterIdForHeader: {
              selectedPoster,
              setSelectedPoster,
            },
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
