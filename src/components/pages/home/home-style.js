import styled from "styled-components";
import leftColumnImage from "../../../media/images/home-bg-1.jpg";
import rightColumnImage from "../../../media/images/diet.svg";
import DatePicker from "react-date-picker";

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
  pointer-events: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
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

export const DateInput = styled(DatePicker)`
  .react-date-picker__wrapper {
    visibility: hidden;
    height: 20px;
  }

  .react-calendar {
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(153, 153, 153, 0.5);
    border-radius: 50px;
    border: none;
    padding: 20px;
  }

  .react-date-picker__calendar {
    left: calc(50% - 175px) !important;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #32292f;
  }

  .react-calendar__tile--now {
    background: #f8f8f8;

    :hover {
      background: #ececec;
    }
  }

  .react-date-picker__wrapper {
    height: 20px;
  }
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 135px;
  left: 50%;
  transform: translate(-50%, 0);
`;
