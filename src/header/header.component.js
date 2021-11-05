import React, { useCallback, useContext, Suspense } from 'react';
import { Header, SelectedImg, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import { ButtonMovie } from './addMovie/addMovie.styled';
import { AppContext } from '../App';
import Search_Button from '../../public/images/Search_Button.png';
import { Main } from '../global/globalStyles';
import { PosterInfoComponent } from './posterInfo/posterInfo.component';
import { useToggle } from '../global/hooks/useToggle';
import { LazyImage } from '../global/components/lazyImage/lazyImage.compoent';
import headerImg from '../../public/images/Header.png';

const PosterForm = React.lazy(() => import('../postersBlock/posterForm/posterForm.component'));
const HeaderComponent = () => {
  const { posterIdForHeader } = useContext(AppContext);
  const [showAdd, setShowForm] = useToggle();
  const closeSelectedPoster = useCallback(() => posterIdForHeader.setSelectedPoster(null), []);
  return (
    <>
      {!posterIdForHeader.selectedPoster ? (
        <Header>
          <LazyImage src={headerImg} alt={'main'} isBanner />
          <TopMenu>
            <LogoComponent />
            <ButtonMovie onClick={setShowForm} />
            {showAdd && (
              <Suspense fallback={<div>Loading...</div>}>
                <PosterForm showAdd={showAdd} changeStateModal={setShowForm} />
              </Suspense>
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
          <PosterInfoComponent posterId={posterIdForHeader.selectedPoster} />
        </Main>
      )}
    </>
  );
};

export default HeaderComponent;
