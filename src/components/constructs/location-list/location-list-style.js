import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ListTitle = styled.p`
  font-family: RobotoCondensed-Bold;
  font-size: 14px;
  color: #000000;
  text-align: left;
  padding-left: 40px;
  padding-bottom: 10px;
`;

export const ListItem = styled.p`
  font-family: RobotoCondensed-Regular;
  font-size: 14px;
  color: #000000;
  text-align: left;
`;

export const ItemContainer = styled.div`
  padding: 10px 40px;
  transition: 300ms;
  cursor: pointer;
  width: 100%;

  :hover {
    background-color: #f8f8f8;
  }
`;
