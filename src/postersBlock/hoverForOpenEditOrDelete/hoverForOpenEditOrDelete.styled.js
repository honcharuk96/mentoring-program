import styled from 'styled-components';

export const Ul = styled.ul`
  position: absolute;
  left: -9999em;
  top: 0;
  z-index: 1;

  list-style: none;
  margin: 0;
  padding: 0;
  background: #333;
`;
export const Nav = styled.nav`
  position: absolute;
  visibility: hidden;
  right: 10px;
  top: 35px;

  width: 50px;
  height: 50px;
  background: #2a202d;
  border-radius: 25px;
  &:hover ${Ul} {
    left: -43px;
  }
`;

export const HoverPoster = styled.div`
  position: relative;
  &:hover ${Nav} {
    visibility: visible;
  }
`;

export const Atag = styled.a`
  display: block;
  padding: 10px 20px;
  line-height: 1.2em;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background: #595959;
  }
`;
