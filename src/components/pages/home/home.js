import { useState } from "react";
import useGetCities from "../../../api/useGetCities";

// Styles
import {
  Wrapper,
  LeftColumn,
  RightColumn,
  MainTitle,
  DateInput,
  InputContainer,
} from "./home-style";

// Components
import Filter from "../../constructs/filter";
import LocationPicker from "../../constructs/location-picker";
import TimeInput from "../../constructs/time-input";
import PersonInput from "../../constructs/person-input";

const Home = ({ className }) => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("");
  const [{ cities }] = useGetCities(search);

  return (
    <Wrapper onClick={(e) => e.target.id === "main" && setActiveFilter("")}>
      <LeftColumn id="main">
        <MainTitle>find your spot.</MainTitle>
      </LeftColumn>
      <RightColumn id="main">
        <Filter
          setActiveFilter={setActiveFilter}
          selectedDistricts={selectedDistricts}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedPeople={selectedPeople}
        />
        {activeFilter === "location" && (
          <InputContainer>
            <LocationPicker
              cities={cities}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              search={search}
              setSearch={setSearch}
              selectedDistricts={selectedDistricts}
              setSelectedDistricts={setSelectedDistricts}
            />
          </InputContainer>
        )}
        {activeFilter === "date" && (
          <DateInput
            className={className}
            isOpen={true}
            value={selectedDate}
            onChange={setSelectedDate}
          />
        )}
        {activeFilter === "time" && (
          <InputContainer>
            <TimeInput value={selectedTime} onChange={setSelectedTime} />
          </InputContainer>
        )}
        {activeFilter === "people" && (
          <InputContainer>
            <PersonInput value={selectedPeople} onClick={setSelectedPeople} />
          </InputContainer>
        )}
      </RightColumn>
    </Wrapper>
  );
};

export default Home;
