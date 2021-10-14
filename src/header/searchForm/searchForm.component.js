import React from 'react';
import { InputsWrapper, SearchInput, SearchWrapper, Text } from './searchForm.styled';
import RedButton from '../../global/components/redButton/redButton.component';

const SearchForm = () => (
  <>
    <SearchWrapper>
      <Text>FIND YOUR MOViE</Text>
      <InputsWrapper>
        <SearchInput />
        <RedButton text="search" />
      </InputsWrapper>
    </SearchWrapper>
  </>
);

export default SearchForm;
