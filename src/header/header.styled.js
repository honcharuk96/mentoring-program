import styled from 'styled-components';
import headerImg from '../../public/images/Header.png';
export const HeaderWrapper = styled.div`
  height: 400px;
  background-image: url(${headerImg});
  padding: 50px;
  background-size: cover;
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
