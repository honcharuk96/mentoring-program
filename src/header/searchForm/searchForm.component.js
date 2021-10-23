import React from 'react';
import { Inputs, SearchInput, Search, Text } from './searchForm.styled';
import RedButton from '../../global/components/redButton/redButton.component';

const SearchForm = () => (
  <>
    <Search>
      <Text>FIND YOUR MOViE</Text>
      <Inputs>
        <SearchInput />
        <RedButton text="search" />
      </Inputs>
    </Search>
  </>
);

export default SearchForm;
