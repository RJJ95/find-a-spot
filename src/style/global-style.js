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
  }

  p, span {
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  input {
    background-color: #ffffff;
    border-radius: 50px;
    padding: 20px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
    outline: none;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

export default GlobalStyle;
