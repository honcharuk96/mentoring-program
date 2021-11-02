import React from 'react';
import PropTypes from 'prop-types';
import { RedButton } from './redButton.styled';

const RedButtonComponent = ({ text, click = null, revertColor = false }) => (
  <>
    <RedButton revertColor={revertColor} onClick={click}>
      {text}
    </RedButton>
  </>
);

export default React.memo(RedButtonComponent);

RedButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
  revertColor: PropTypes.bool,
};
