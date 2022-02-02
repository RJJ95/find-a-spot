import { useState, useEffect } from "react";
import useGetCities from "../../../api/useGetCities";

// Styles
import {
  Wrapper,
  LeftColumn,
  RightColumn,
  MainTitle,
  LocationPickerContainer,
} from "./home-style";

// Components
import Filter from "../../constructs/filter";
import LocationPicker from "../../constructs/location-picker";

const Home = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPersons, setSelectedPersons] = useState(1);
  const [{ cities, isLoading, isError }, fetchCities] = useGetCities(search);

  return (
    <Wrapper>
      <LeftColumn>
        <MainTitle>find your spot.</MainTitle>
      </LeftColumn>
      <RightColumn>
        <Filter setActiveFilter={setActiveFilter} />
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
      </RightColumn>
    </Wrapper>
  );
};

export default Home;
