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
  search,
  setSearch,
  selectedDistricts,
  setSelectedDistricts,
}) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [{ districts }] = useGetDistricts(selectedCity);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          onChange={setSearch}
          value={search}
          placeholder="Search a city"
        />
        <SearchInput placeholder="Search a district" />
      </SearchContainer>
      <LocationContainer>
        <ListContainer>
          {cities.map((city, index) => (
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
