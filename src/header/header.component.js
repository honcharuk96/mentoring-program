import React, { useCallback, useState } from 'react';
import { Header, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import PosterForm from '../postersBlock/posterForm/posterForm.component';
import { ButtonMovie } from './addMovie/addMovie.styled';

const HeaderComponent = () => {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const changeStateModal = useCallback(() => {
    setShowAddEdit(!showAddEdit);
  });

  return (
    <>
      <Header>
        <TopMenu>
          <LogoComponent />
          <ButtonMovie onClick={() => changeStateModal()} />
          {showAddEdit && <PosterForm showAddEdit={showAddEdit} parentFunc={() => changeStateModal()} />}
        </TopMenu>
        <SearchForm />
      </Header>
    </>
  );
};

export default HeaderComponent;
