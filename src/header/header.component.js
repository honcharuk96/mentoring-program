import React, { useContext } from 'react';
import {Header, SelectedImg, TopMenu} from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import { PosterForm } from '../postersBlock/posterForm/posterForm.component';
import { ButtonMovie } from './addMovie/addMovie.styled';
import { AppContext } from '../App';
import Search_Button from '../../public/images/Search_Button.png';
import { Main } from '../global/globalStyles';
import { PosterInfoComponent } from './posterInfo/posterInfo.component';
import { useToggle } from '../global/hooks/useToggle';

const HeaderComponent = () => {
  const { posterIdForHeader } = useContext(AppContext);
  const [showAdd, setShowForm] = useToggle();

  return (
    <>
      {!posterIdForHeader.selectedPoster ? (
        <Header>
          <TopMenu>
            <LogoComponent />
            <ButtonMovie onClick={setShowForm} />
            {showAdd && <PosterForm showAdd={showAdd} changeStateModal={setShowForm} />}
          </TopMenu>
          <SearchForm />
        </Header>
      ) : (
          <Main>
            <TopMenu  isPosterSelected >
              <LogoComponent />
              <SelectedImg
                src={Search_Button}
                alt={'close'}
                onClick={() => posterIdForHeader.setSelectedPoster(false)}
              />
            </TopMenu>
            <PosterInfoComponent posterId={posterIdForHeader.selectedPoster} />
          </Main>
      )}
    </>
  );
};

export default HeaderComponent;
