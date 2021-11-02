import React, { memo, useContext } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList } from './navigationCategory.styled';
import { AppContext } from '../../App';

const NavigationCategory = () => {
  const { nav } = useContext(AppContext);
  return (
    <>
      <NavigationList>
        {nav.links.map((link, index) => (
          <NavigationItem
            key={`${link.text}_${link.id}`}
            onClick={() => nav.setActiveNav(link)}
            selected={nav.activeNav && nav.activeNav.id === index}
          >
            {link.text}
          </NavigationItem>
        ))}
      </NavigationList>
      <Line />
    </>
  );
};

export default memo(NavigationCategory);
