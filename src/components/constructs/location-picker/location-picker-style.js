import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
  border-radius: 50px;
  padding: 20px 40px;
  min-width: 500px;

  @media (max-width: 640px) {
    min-width: 350px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;

  div:first-child {
    border-right: 1px solid #ececec;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  max-height: 350px;
  overflow: scroll;

  div:first-child div {
    border-right: 1px solid #ececec;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const Picker = styled.div`
  cursor: pointer;
  transition: 300ms;
  padding: 10px;
  background-color: ${({ selected }) => selected && "#f8f8f8"};

  :hover {
    background-color: #f8f8f8;
  }
`;
