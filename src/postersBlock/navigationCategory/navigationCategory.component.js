import React, { memo, useEffect, useState } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList, SortList, SortListBlock, SortListText } from './navigationCategory.styled';
import { links, variantSorts } from '../../global/constants/global.constants';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { findQueryByName, pushQueryForSearch } from '../../global/helpers';

const NavigationCategory = ({ getPostersByActiveNavWithSort, changeVariantSort, activeNav, changeActiveNav }) => {
  const history = useHistory();

  useEffect(() => {
    const isQueryGenre = findQueryByName(history.location.search, 'genre');
    isQueryGenre ? changeActiveNav(isQueryGenre) : getPostersByActiveNavWithSort();
  }, []);

  const changeGenre = link => {
    history.push({
      pathname: '/search',
      search: pushQueryForSearch(history.location.search, 'genre', link.text === 'all' ? '' : link.text),
    });
    changeActiveNav(link.text);
  };

  return (
    <>
      <NavigationList>
        {links.map(link => (
          <NavigationItem
            key={`${link.text}_${link.id}`}
            onClick={() => changeGenre(link)}
            selected={link.text === activeNav}
          >
            {link.text}
          </NavigationItem>
        ))}
        <SortComponent changeVariantSort={changeVariantSort} />
      </NavigationList>
      <Line />
    </>
  );
};

NavigationCategory.propTypes = {
  getPostersByActiveNavWithSort: PropTypes.func.isRequired,
  changeVariantSort: PropTypes.func.isRequired,
  changeActiveNav: PropTypes.func.isRequired,
  activeNav: PropTypes.string.isRequired,
};

export default memo(NavigationCategory);

export const SortComponent = ({ changeVariantSort }) => {
  const history = useHistory();
  const [defSort, setDefSort] = useState(() => variantSorts[0].name);

  useEffect(() => {
    const isQuerySortBy = findQueryByName(history.location.search, 'sortBy');
    if (isQuerySortBy) {
      changeVariantSort(isQuerySortBy);
      setDefSort(isQuerySortBy);
    }
  }, []);

  const changeSort = e => {
    history.push({
      pathname: '/search',
      search: pushQueryForSearch(history.location.search, 'sortBy', e.target.value),
    });
    setDefSort(e.target.value);
    changeVariantSort(e.target.value);
  };

  return (
    <SortListBlock>
      <SortListText> Sort by</SortListText>
      <SortList name="sort" value={defSort} onChange={e => changeSort(e)} data-testid={'select'}>
        {variantSorts.map((variant, index) => (
          <option key={index} value={variant.name}>
            {variant.label}
          </option>
        ))}
      </SortList>
    </SortListBlock>
  );
};

SortComponent.propTypes = {
  changeVariantSort: PropTypes.func.isRequired,
};
