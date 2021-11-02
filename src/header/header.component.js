import React, { useContext } from 'react';
import { Header, TopMenu } from './header.styled';
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
      {posterIdForHeader.selectedPoster === false ? (
        <Header>
          <TopMenu>
            <LogoComponent />
            <ButtonMovie onClick={setShowForm} />
            {showAdd && <PosterForm showAdd={showAdd} changeStateModal={setShowForm} />}
          </TopMenu>
          <SearchForm />
        </Header>
      ) : (
        <>
          <Main>
            <TopMenu style={{ padding: '30px 0' }}>
              <LogoComponent />
              <img
                src={Search_Button}
                alt={'close'}
                onClick={() => posterIdForHeader.setSelectedPosterId(false)}
                style={{ cursor: 'pointer' }}
              />
            </TopMenu>
            <PosterInfoComponent posterId={posterIdForHeader.selectedPoster} />
          </Main>
        </>
      )}
    </>
  );
};

export default HeaderComponent;
