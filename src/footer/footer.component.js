import React, { memo } from 'react';
import LogoComponent from '../global/components/logo/logo.component';
import { Footer } from './footer.styled';

const FooterComponent = () => (
  <>
    <Footer>
      <LogoComponent />
    </Footer>
  </>
);

export default memo(FooterComponent);
