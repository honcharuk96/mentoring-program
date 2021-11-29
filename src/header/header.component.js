import React from 'react';
import { Header, SelectedImg, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.connector';
import LogoComponent from '../global/components/logo/logo.component';
import { ButtonMovie } from './addMovie/addMovie.styled';
import { Main } from '../global/globalStyles';
import PosterInfoComponent from './posterInfo/posterInfo.connector';
import { LazyImage } from '../global/components/lazyImage/lazyImage.compoent';
import PropTypes from 'prop-types';
import { statusForm } from '../global/constants/global.constants';
import {useRouter} from 'next/router';

const HeaderComponent = ({ setSelectedPoster, selectedPoster, openModal }) => {
  const router = useRouter()
  const closeSelectedPoster =() => {
    delete router.query['movie'];

    router.push({
      pathname: '/search',
      query: {...router.query},
    });
    setSelectedPoster(null);
  };
  return (
    <>
      {!selectedPoster ? (
        <>
          <Header>
            <LazyImage src={'images/Header.png'} alt={'main'} isBanner />
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
            <SelectedImg loading={'lazy'} src={'images/Search_Button.png'} alt={'close'} onClick={closeSelectedPoster} />
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
