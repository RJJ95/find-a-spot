import styled from "styled-components";
import image from "../../../media/images/home-bg-1.jpg";

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
    url(${image}) no-repeat center;
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
`;

export const LocationPickerContainer = styled.div`
  position: absolute;
  top: 140px;
  width: calc(100% - 80px);
`;
