import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  padding: 20px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
  outline: none;
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  gap: 20px;
`;

export const Selector = styled.button`
  background-color: ${({ active }) => (active ? "#f8f8f8" : "#fff")};
  border: none;
  padding: 5px 30px;
  cursor: pointer;
  transition: 300ms;
  border-radius: 10px;

  :hover {
    background-color: #f8f8f8;
  }
`;
