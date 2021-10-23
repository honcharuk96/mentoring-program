import React from 'react';
import PropTypes from 'prop-types';
import { RedButtonWrapper } from './redButton.styled';

const RedButton = ({ text, click = null, revertColor = false }) => (
    <>
      <RedButtonWrapper revertColor={revertColor} onClick={click}>
        {text}
      </RedButtonWrapper>
    </>
  );

export default React.memo(RedButton);

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
  revertColor: PropTypes.bool,
};
