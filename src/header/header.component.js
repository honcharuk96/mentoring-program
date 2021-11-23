import React, { useCallback } from 'react';
import { Header, SelectedImg, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import { ButtonMovie } from './addMovie/addMovie.styled';
import Search_Button from '../../public/images/Search_Button.png';
import { Main } from '../global/globalStyles';
import PosterInfoComponent from './posterInfo/posterInfo.connector';
import { LazyImage } from '../global/components/lazyImage/lazyImage.compoent';
import headerImg from '../../public/images/Header.png';
import PropTypes from 'prop-types';
import { statusForm } from '../global/constants/global.constants';
import { useHistory, useLocation } from 'react-router-dom';

const HeaderComponent = ({ setSelectedPoster, selectedPoster, openModal }) => {
  const history = useHistory();
  const location = useLocation();
  const closeSelectedPoster = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete('movie');

    history.push({
      pathname: '/search',
      search: searchParams.toString(),
    });
    setSelectedPoster(null);
  }, []);
  return (
    <>
      {!selectedPoster ? (
        <>
          <Header>
            <LazyImage src={headerImg} alt={'main'} isBanner />
            <TopMenu>
              <LogoComponent />
              <ButtonMovie onClick={() => openModal(statusForm.ADD, null)} />
            </TopMenu>
            <SearchForm />
          </Header>
        </>
      ) : (
        <Main>
          <TopMenu isPosterSelected>
            <LogoComponent />
            <SelectedImg loading={'lazy'} src={Search_Button} alt={'close'} onClick={closeSelectedPoster} />
          </TopMenu>
          <PosterInfoComponent posterId={selectedPoster} />
        </Main>
      )}
    </>
  );
};

export default HeaderComponent;

HeaderComponent.propTypes = {
  setSelectedPoster: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  selectedPoster: PropTypes.number,
};
