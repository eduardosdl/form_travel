import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background} no-repeat;
    font-size: 16px;
    padding-top: 32px;
    overflow-y: hidden;
  }

  button {
    cursor: pointer;
  }
`;
