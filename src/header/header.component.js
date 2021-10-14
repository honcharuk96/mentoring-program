import React from 'react';
import { HeaderWrapper, TopMenu } from './header.styled';
import SearchForm from './searchForm/searchForm.component';
import LogoComponent from '../global/components/logo/logo.component';
import { ButtonMovie } from './addMovie/adMovie.styled';

const HeaderComponent = () => (
  <>
    <HeaderWrapper>
      <TopMenu>
        <LogoComponent />
        <ButtonMovie />
      </TopMenu>
      <SearchForm />
    </HeaderWrapper>
  </>
);

export default HeaderComponent;
