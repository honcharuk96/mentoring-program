import React from 'react';
import PropTypes from 'prop-types';
import { RedButton } from './redButton.styled';

const RedButtonComponent = ({ text, click , revertColor }) => (
  <>
    <RedButton revertColor={revertColor} onClick={click}>
      {text}
    </RedButton>
  </>
);

export default RedButtonComponent;

RedButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
  revertColor: PropTypes.bool,
};

RedButtonComponent.defaultProps = {
    click:null,
    revertColor: false,
}
