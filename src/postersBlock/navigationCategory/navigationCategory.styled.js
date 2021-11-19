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

export const SortList = styled.select`
  background: transparent;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const SortListText = styled.div`
  opacity: 0.6;
`;
export const SortListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 175px;
`;
