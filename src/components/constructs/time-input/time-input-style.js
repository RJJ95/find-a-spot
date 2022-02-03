import styled from "styled-components";

export const Input = styled.input`
  background-color: #ffffff;
  border-radius: 50px;
  padding: 20px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
  outline: none;
  width: fit-content;
  font-family: "Roboto Condensed", sans-serif;

  @media (max-width: 640px) {
    width: 100px;
  }
`;
