import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
  border-radius: 50px;
  overflow: hidden;
  width: 100%;
  height: 75px;
  justify-content: space-between;

  div:first-child {
    padding-left: 40px;
  }

  div:not(:last-child) {
    border-right: 1px solid #ececec;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
