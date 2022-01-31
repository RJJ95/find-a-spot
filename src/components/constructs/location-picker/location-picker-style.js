import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
  border-radius: 50px;
  overflow: hidden;
  padding: 20px 40px;
`;

export const SearchContainer = styled.div`
  display: flex;

  input:first-child {
    border-right: 1px solid #ececec;
  }
`;

export const LocationContainer = styled.div`
  padding: 20px;
`;
