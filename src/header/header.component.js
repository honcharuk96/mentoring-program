import React, { useCallback, useState } from 'react';
import { Header, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import PosterForm from '../postersBlock/posterForm/posterForm.component';
import { ButtonMovie } from './addMovie/addMovie.styled';

const HeaderComponent = () => {
  const [showAdd, setShowForm] = useState(false);
  const changeStateModal = useCallback(() => {setShowForm(!showAdd);});

  return (
    <>
      <Header>
        <TopMenu>
          <LogoComponent />
          <ButtonMovie onClick={() => changeStateModal()} />
          {showAdd  && <PosterForm showAdd={showAdd}  changeStateModal={() => changeStateModal()} />}
        </TopMenu>
        <SearchForm />
      </Header>
    </>
  );
};

export default HeaderComponent;
