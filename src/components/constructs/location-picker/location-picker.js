import { useState } from "react";
import useGetDistricts from "../../../api/useGetDistricts";

import {
  Wrapper,
  SearchContainer,
  LocationContainer,
  ListContainer,
  Picker,
} from "./location-picker-style";

// Components
import SearchInput from "../search-input";

const LocationPicker = ({
  cities,
  citySearch,
  setCitySearch,
  districtSearch,
  setDistrictSearch,
  selectedDistricts,
  setSelectedDistricts,
  citiesLoading,
}) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [{ districts, fetchingDistricts }] = useGetDistricts(selectedCity);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          onChange={setCitySearch}
          value={citySearch}
          placeholder="Search a city"
          isLoading={citiesLoading}
        />
        <SearchInput
          value={districtSearch}
          onChange={setDistrictSearch}
          placeholder="Search a district"
          isLoading={fetchingDistricts}
        />
      </SearchContainer>
      <LocationContainer>
        <ListContainer>
          {cities &&
            cities.map((city, index) => (
              <Picker
                key={index}
                selected={city === selectedCity}
                onClick={() => setSelectedCity(city)}
              >
                <p>{city}</p>
              </Picker>
            ))}
        </ListContainer>
        <ListContainer>
          {districts &&
            districts.map((district, index) => (
              <Picker
                key={index}
                selected={selectedDistricts.includes(district)}
                onClick={() =>
                  setSelectedDistricts((prevState) => [...prevState, district])
                }
              >
                <p>{district}</p>
              </Picker>
            ))}
        </ListContainer>
      </LocationContainer>
    </Wrapper>
  );
};

export default LocationPicker;
