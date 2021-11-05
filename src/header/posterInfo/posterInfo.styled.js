import styled from 'styled-components';

export const PosterDetail = styled.div`
  display: flex;
  padding-bottom: 30px;
`;
export const PosterDetailRightBlock = styled.div`
  display: flex;
`;
export const PosterDetailLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

export const PosterDetailHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const PosterDetailTitle = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
`;

export const PosterDetailVoteAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  margin-left: 25px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;

export const PosterDetailDate = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #f65261;
  padding: 30px 0;
`;

export const PosterDetailTimes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const PosterDetailOverview = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
