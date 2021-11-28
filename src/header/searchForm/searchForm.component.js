import React, { memo, useEffect, useState } from 'react';
import { Inputs, SearchInput, Search, Text } from './searchForm.styled';
import RedButton from '../../global/components/redButton/redButton.component';
import { parseFromUrl } from '../../global/helpers';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchForm = ({ setPosterDataFromForm }) => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  useEffect(() => {
    const data = parseFromUrl(history.location.pathname);
    if (data.length) {
      setPosterDataFromForm(data);
    }
  }, []);
  const submitSearchValue = () => {
    history.push({
      pathname: `/search/${searchValue}`,
      search: history.location.search,
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
