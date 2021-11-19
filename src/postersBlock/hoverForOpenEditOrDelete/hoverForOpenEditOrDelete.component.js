import React from 'react';
import { Atag, HoverPoster, Nav, Ul } from './hoverForOpenEditOrDelete.styled';
import PropTypes from 'prop-types';
import { statusForm } from '../../global/constants/global.constants';

const HoverForOpenEditOrDeleteComponent = ({ openModal, id, children }) => (
  <HoverPoster>
    <Nav>
      <Atag>...</Atag>
      <Ul>
        <li onClick={() => openModal(statusForm.UPDATE, id)}>
          <Atag> Edit</Atag>
        </li>
        <li onClick={() => openModal(statusForm.DELETE, id)}>
          <Atag>Delete</Atag>
        </li>
      </Ul>
    </Nav>
    {children}
  </HoverPoster>
);
export default HoverForOpenEditOrDeleteComponent;

HoverForOpenEditOrDeleteComponent.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  openModal: PropTypes.func.isRequired,
};
