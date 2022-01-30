import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }

  h1, p {
    margin: 0;
  }

  h1 {
    font-size: 60px;
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default GlobalStyle;
