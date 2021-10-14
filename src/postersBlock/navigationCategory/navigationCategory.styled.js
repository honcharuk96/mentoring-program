import styled, { css } from 'styled-components';

export const NavigationList = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  list-style: none;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;

export const NavigationItem = styled.li`
  padding: 25px 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  ${props =>
    props.selected &&
    css`
      border-bottom: 2px solid #f65261;
    `}
`;
