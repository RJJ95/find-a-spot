import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
  border-radius: 50px;
  width: fit-content;
  overflow: hidden;

  div:not(:last-child) {
    border-right: 1px solid #ececec;
  }
`;
