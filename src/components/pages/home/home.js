import { useState } from "react";
import useGetCities from "../../../api/useGetCities";

// Styles
import {
  Wrapper,
  LeftColumn,
  RightColumn,
  MainTitle,
  LocationPickerContainer,
  DateInput,
} from "./home-style";

// Components
import Filter from "../../constructs/filter";
import LocationPicker from "../../constructs/location-picker";
import TimeInput from "../../constructs/time-input";

const Home = ({ className }) => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPersons, setSelectedPersons] = useState(1);
  const [{ cities }] = useGetCities(search);

  return (
    <Wrapper>
      <LeftColumn>
        <MainTitle>find your spot.</MainTitle>
      </LeftColumn>
      <RightColumn>
        <Filter
          setActiveFilter={setActiveFilter}
          selectedDistricts={selectedDistricts}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedPersons={selectedPersons}
          setSelectedPersons={setSelectedPersons}
        />
        {activeFilter === "location" && (
          <LocationPickerContainer>
            <LocationPicker
              cities={cities}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              search={search}
              setSearch={setSearch}
              selectedDistricts={selectedDistricts}
              setSelectedDistricts={setSelectedDistricts}
            />
          </LocationPickerContainer>
        )}
        <DateInput
          className={className}
          isOpen={activeFilter === "date"}
          value={selectedDate}
          onChange={setSelectedDate}
        />
        {activeFilter === "time" && (
          <TimeInput value={selectedTime} onChange={setSelectedTime} />
        )}
      </RightColumn>
    </Wrapper>
  );
};

export default Home;
