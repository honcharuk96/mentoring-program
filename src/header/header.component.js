import React from 'react';
import { Header, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import { ButtonMovie } from './addMovie/adMovie.styled';

const HeaderComponent = () => (
  <>
    <Header>
      <TopMenu>
        <LogoComponent />
        <ButtonMovie />
      </TopMenu>
      <SearchForm />

    </Header>
  </>
);

export default HeaderComponent;
