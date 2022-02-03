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
    font-family: Roboto-Medium;
    font-size: 72px;

    @media (max-width: 640px) {
      font-size: 54px;
    }
  }

  p, span {
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default GlobalStyle;
