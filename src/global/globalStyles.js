import styled, { createGlobalStyle } from 'styled-components';

import fontData from './fonts/fonts.constants';

const { MONTSERRAT } = fontData;
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${MONTSERRAT.name};
    font-style: normal;
    font-weight: 400;
    src: url(${MONTSERRAT.eot}); /* IE9 Compat Modes */
    src: local(''),
    url('${MONTSERRAT.eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url(${MONTSERRAT.woff2}) format('woff2'), /* Super Modern Browsers */ 
    url(${MONTSERRAT.woff}) format('woff'), /* Modern Browsers */ 
    url(${MONTSERRAT.ttf}) format('truetype'), /* Safari, Android, iOS */ 
    url('${MONTSERRAT.svg}#Montserrat') format('svg'); /* Legacy iOS */
  }

  * {
    font-family: ${MONTSERRAT.name}, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    box-sizing: border-box;
  }


  body {
    padding: 0;
    margin: 0;
    background: transparent;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    line-height: 1.2;
    letter-spacing: normal;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #reactSelect [class*="-control"]{
    background: rgba(50,50,50,0.948044);
    height: 57px;
    border: 0;
    margin-top: 5px;
  }
  #reactSelect [class*="-menu"]{
    background: rgba(50,50,50,0.948044);
    z-index: 5;
  }
  #reactSelect [class*="-Input"]{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export default GlobalStyles;

export const Main = styled.div`
  padding: 0 50px;
  background: #232323;
`;

export const Line = styled.div`
  height: 4px;
  border-bottom: 2px solid #080707;
  background: #424242;
`;

export const Bold = styled.span`
  font-weight: 900;
`;
