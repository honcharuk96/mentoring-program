import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1280px;
  height: 720px;
  position: absolute;
  top: 0;
  left: 0;
`;

const App = () => (
  <Wrapper>
    <h1>I'm configuring setting up Webpack!!!</h1>
  </Wrapper>
);

export default hot(module)(App);
