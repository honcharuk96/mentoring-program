import React, { memo, useEffect } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList, SortList, SortListBlock, SortListText } from './navigationCategory.styled';
import { links, variantSorts } from '../../global/constants/global.constants';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { pushQueryForSearch } from '../../global/helpers';

const NavigationCategory = ({ getPostersByActiveNavWithSort, changeVariantSort, activeNav, changeActiveNav }) => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => getPostersByActiveNavWithSort(), []);
  const changeGenre = link => {
    history.push({
      pathname: '/search',
      search: pushQueryForSearch(location.search, 'genre', link.text === 'all' ? '' : link.text),
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
  const history = useHistory();
  const location = useLocation();
  const changeSort = e => {
    const selectedSortName = variantSorts[e.target.value].name;
    history.push({
      pathname: '/search',
      search: pushQueryForSearch(location.search, 'sortBy', selectedSortName),
    });

    changeVariantSort(selectedSortName);
  };
  return (
    <SortListBlock>
      <SortListText> Sort by</SortListText>
      <SortList name="sort" defaultValue={variantSorts[1].name} onChange={e => changeSort(e)}>
        {variantSorts.map((variant, index) => (
          <option key={index} value={index}>
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
