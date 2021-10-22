import styled from 'styled-components';
export const Posters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  padding: 25px 0;
`;

export const Img = styled.img`
  width: 320px;
  height: 480px;
`;

export const PosterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const PosterTitle = styled.div`
  opacity: 0.7;
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  mix-blend-mode: normal;
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 25px;
  border: 1px solid #555555;
  border-radius: 4px;
  opacity: 0.7;
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0;
  mix-blend-mode: normal;
`;
