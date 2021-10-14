import styled from 'styled-components';
export const ButtonMovie = styled.input.attrs({ type: 'button', value: '+Add movie' })`
  padding: 11px 18px;
  border: 0;
  border-radius: 4px;
  background: rgba(96, 96, 96, 0.68);
  color: #f65261;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  &:active {
    color: aliceblue;
  }
`;
