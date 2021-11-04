import styled from 'styled-components';
import headerImg from '../../public/images/Header.png';
export const Header = styled.div`
  height: 400px;
  background-image: url(${headerImg});
  padding: 50px;
  background-size: cover;
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${props => (props.isPosterSelected ? '30px 0' : '0')};
`;

export const SelectedImg = styled.img`
  cursor: pointer;
`;
