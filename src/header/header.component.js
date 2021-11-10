import React, { useCallback, Suspense } from 'react';
import { Header, SelectedImg, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import { ButtonMovie } from './addMovie/addMovie.styled';
import Search_Button from '../../public/images/Search_Button.png';
import { Main } from '../global/globalStyles';
import PosterInfoComponent from './posterInfo/posterInfo.connector';
import { useToggle } from '../global/hooks/useToggle';
import { LazyImage } from '../global/components/lazyImage/lazyImage.compoent';
import headerImg from '../../public/images/Header.png';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PosterForm = React.lazy(() => import('../postersBlock/posterForm/posterForm.component'));

const HeaderComponent = ({ setSelectedPoster, selectedPoster }) => {
  const [showAdd, setShowForm] = useToggle();
  const closeSelectedPoster = useCallback(() => setSelectedPoster(null), []);
  return (
    <>
      {!selectedPoster ? (
        <Header>
          <LazyImage src={headerImg} alt={'main'} isBanner />
          <TopMenu>
            <LogoComponent />
            <ButtonMovie onClick={setShowForm} />
            {showAdd &&
              ReactDOM.createPortal(
                <Suspense fallback={<div>Loading...</div>}>
                  <PosterForm showAdd={showAdd} changeStateModal={setShowForm} />
                </Suspense>,
                document.body,
              )}
          </TopMenu>
          <SearchForm />
        </Header>
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
  selectedPoster: PropTypes.number,
};
