import React, { memo, useEffect } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList, SortList, SortListBlock, SortListText } from './navigationCategory.styled';
import { links, variantSorts } from '../../global/constants/global.constants';
import PropTypes from 'prop-types';

const NavigationCategory = ({ getPostersByActiveNavWithSort, changeVariantSort, activeNav, changeActiveNav }) => {
  useEffect(() => getPostersByActiveNavWithSort(), []);
  return (
    <>
      <NavigationList>
        {links.map(link => (
          <NavigationItem
            key={`${link.text}_${link.id}`}
            onClick={() => changeActiveNav(link.text)}
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

const SortComponent = ({ changeVariantSort }) => (
  <SortListBlock>
    <SortListText> Sort by</SortListText>
    <SortList
      name="sort"
      defaultValue={variantSorts[1]}
      onChange={e => changeVariantSort(variantSorts[e.target.value].name)}
    >
      {variantSorts.map((variant, index) => (
        <option key={index} value={index}>
          {variant.label}
        </option>
      ))}
    </SortList>
  </SortListBlock>
);

SortComponent.propTypes = {
  changeVariantSort: PropTypes.func.isRequired,
};
