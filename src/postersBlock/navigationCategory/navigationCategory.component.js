import React, { memo } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList, SortList, SortListBlock, SortListText } from './navigationCategory.styled';
import { links, variantSorts } from '../../global/constants/global.constants';

const NavigationCategory = ({ activeNav, changeActiveNav, changeVariantSort }) => (
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

export default memo(NavigationCategory);

const SortComponent = ({ changeVariantSort }) => (
  <SortListBlock>
    <SortListText> Sort by</SortListText>
    <SortList
      name="siti"
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
