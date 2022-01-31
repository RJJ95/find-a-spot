import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  cursor: pointer;
  transition: 300ms;
  width: 100%;

  :hover {
    background-color: #f8f8f8;
  }
`;

export const Label = styled.p`
  font-family: RobotoCondensed-Bold;
  font-size: 14px;
  color: #000000;
  text-align: left;
  margin-bottom: 5px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const SubText = styled.p`
  font-family: RobotoCondensed-Regular;
  font-size: 12px;
  color: #999999;
  text-align: left;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;
