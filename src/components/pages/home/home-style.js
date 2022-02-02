import styled from "styled-components";
import leftColumnImage from "../../../media/images/home-bg-1.jpg";
import rightColumnImage from "../../../media/images/diet.svg";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f5f3;
  display: flex;
`;

export const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${leftColumnImage}) no-repeat center;
  background-size: cover;
  width: 50vw;
`;

export const MainTitle = styled.h1`
  color: #ffffff;
`;

export const RightColumn = styled.div`
  display: flex;
  width: 50vw;
  padding: 40px;
  flex-direction: column;
  position: relative;
  background: url(${rightColumnImage}) no-repeat center;
  background-size: 70%;
`;

export const LocationPickerContainer = styled.div`
  position: absolute;
  top: 140px;
  width: calc(100% - 80px);
`;
