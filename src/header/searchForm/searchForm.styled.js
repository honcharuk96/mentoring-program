import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  place-content: stretch center;
  align-items: center;
  width: 80%;
  height: calc(100% - 100px);
  margin: auto;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Text = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding-bottom: 40px;
  color: #ffffff;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 49px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SearchInput = styled.input.attrs({ type: 'text', placeholder: 'What do you want to watch?' })`
  width: 100%;
  padding: 0 14px;
  margin-right: 14px;
  border: 0;
  border-radius: 4px;
  opacity: 0.7;
  background: rgba(50, 50, 50, 0.8);
  color: aliceblue;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0;
  mix-blend-mode: normal;
`;
