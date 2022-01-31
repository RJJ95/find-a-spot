import { useState } from "react";

import {
  Wrapper,
  SearchContainer,
  LocationContainer,
  ListContainer,
  Picker,
} from "./location-picker-style";

// Components
import SearchInput from "../search-input";

const LocationPicker = () => {
  const [city, setCity] = useState("");
  const [cityResults, setCityResults] = useState([{ name: "Amsterdam" }]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [districtResults, setDistrictResults] = useState([{ name: "Centrum" }]);
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          onChange={setCity}
          value={city}
          placeholder="Search a city"
        />
        <SearchInput placeholder="Search a district" />
      </SearchContainer>
      <LocationContainer>
        <ListContainer>
          {cityResults.map((cityResult, index) => (
            <Picker
              key={index}
              selected={cityResult.name === selectedCity}
              onClick={() => setSelectedCity(cityResult.name)}
            >
              <p>{cityResult.name}</p>
            </Picker>
          ))}
        </ListContainer>
        <ListContainer>
          {districtResults.map((districtResult, index) => (
            <Picker
              key={index}
              selected={selectedDistricts.includes(districtResult.name)}
              onClick={() => setSelectedDistricts(districtResult.name)}
            >
              <p>{districtResult.name}</p>
            </Picker>
          ))}
        </ListContainer>
      </LocationContainer>
    </Wrapper>
  );
};

export default LocationPicker;
