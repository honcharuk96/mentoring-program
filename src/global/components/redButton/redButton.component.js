import React from 'react';
import PropTypes from 'prop-types';
import { RedButton } from './redButton.styled';

const RedButtonComponent = ({ text }) => (
  <>
    <RedButton>{text}</RedButton>
  </>
);

export default RedButtonComponent;

RedButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
