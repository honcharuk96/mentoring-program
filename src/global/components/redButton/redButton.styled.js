import styled from 'styled-components';

export const RedButton = styled.div`
  padding: 18px 70px;
  border-radius: 4px;
  background: ${props => (props.revertColor ? '#232323' : '#f65261')};
  color: ${props => (props.revertColor ? '#f65261' : '#ffffff')};
  border: 1px solid #f65261;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;
