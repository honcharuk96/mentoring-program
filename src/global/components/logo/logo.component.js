import React, { memo } from 'react';
import { Logo } from './logo.styled';
import { Bold } from '../../globalStyles';

const LogoComponent = () => (
  <Logo>
    <Bold>netflix</Bold>roulette
  </Logo>
);

export default memo(LogoComponent);
