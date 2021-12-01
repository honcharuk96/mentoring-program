import React, { memo, useEffect, useState } from 'react';
import { Inputs, SearchInput, Search, Text } from './searchForm.styled';
import RedButton from '../../global/components/redButton/redButton.component';
import { parseFromUrl } from '../../global/helpers';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';

const SearchForm = ({ setPosterDataFromForm }) => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter()
  useEffect(() => {
    const data = parseFromUrl(router.asPath);
    if (data.length) {
      setPosterDataFromForm(data);
    }
  }, []);
  const submitSearchValue = () => {
    router.push({
      pathname: `/search/[${searchValue}]`,
      search: router.query,
    });
    setPosterDataFromForm(searchValue);
  };
  return (
    <>
      <Search>
        <Text>FIND YOUR MOViE</Text>
        <Inputs onSubmit={e => e.preventDefault()}>
          <SearchInput value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          <RedButton text="search" click={() => submitSearchValue()} />
        </Inputs>
      </Search>
    </>
  );
};

export default memo(SearchForm);

SearchForm.propTypes = {
  setPosterDataFromForm: PropTypes.func.isRequired,
};
