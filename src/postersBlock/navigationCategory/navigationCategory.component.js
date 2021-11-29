import React, { memo, useEffect, useState } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList, SortList, SortListBlock, SortListText } from './navigationCategory.styled';
import { links, variantSorts } from '../../global/constants/global.constants';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';

const NavigationCategory = ({ getPostersByActiveNavWithSort, changeVariantSort, activeNav, changeActiveNav }) => {
  const router = useRouter()
  useEffect(() => {
    const isQueryGenre =router.query['genre'];
    isQueryGenre ? changeActiveNav(isQueryGenre) : getPostersByActiveNavWithSort();
  }, []);

  const changeGenre = link => {
    router.push({
      pathname: '/search/',
      query: {...router.query, genre: link.text === 'all' ? '' : link.text},
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

const SortComponent = ({ changeVariantSort }) => {

  const router = useRouter()
  const [defSort, setDefSort] = useState(() => variantSorts[0].name);

  useEffect(() => {
    const isQuerySortBy = router.query['sortBy'];
    if (isQuerySortBy) {
      changeVariantSort(isQuerySortBy);
      setDefSort(isQuerySortBy);
    }
  }, []);

  const changeSort = e => {
    router.push({
      pathname: '/search',
      query:  {...router.query,sortBy: e.target.value},
    });
    setDefSort(e.target.value);
    changeVariantSort(e.target.value);
  };

  return (
    <SortListBlock>
      <SortListText> Sort by</SortListText>
      <SortList name="sort" value={defSort} onChange={e => changeSort(e)}>
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
