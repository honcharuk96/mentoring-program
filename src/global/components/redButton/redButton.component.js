import React from 'react';
import PropTypes from 'prop-types';
import { RedButtonWrapper } from './redButton.styled';

const RedButton = ({ text }) => (
  <>
    <RedButtonWrapper>{text}</RedButtonWrapper>
  </>
);

export default RedButton;

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
};
