import styled from 'styled-components';

export const Header = styled.div`
  height: 400px;
  padding: 50px;
  position: relative;
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
