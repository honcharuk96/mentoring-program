import React, { memo } from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList } from './navigationCategory.styled';
import PropTypes from 'prop-types';

const NavigationCategory = ({ links, setActive, activeNav }) => (
  <>
    <NavigationList>
      {links.map((link, index) => (
        <NavigationItem
          key={`${link.text}_${link.id}`}
          onClick={() => setActive(link)}
          selected={activeNav && activeNav.id === index}
        >
          {link.text}
        </NavigationItem>
      ))}
    </NavigationList>
    <Line />
  </>
);

export default memo(NavigationCategory);

NavigationCategory.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  setActive: PropTypes.func.isRequired,
  activeNav: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
