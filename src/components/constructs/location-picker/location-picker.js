import { useState } from "react";

import {
  Wrapper,
  SearchContainer,
  LocationContainer,
} from "./location-picker-style";

// Components
import SearchInput from "../search-input";
import LocationList from "../location-list";

const LocationPicker = () => {
  const [city, setCity] = useState("");

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
        <LocationList listTitle="City" list={[{ name: "Amsterdam" }]} />
      </LocationContainer>
    </Wrapper>
  );
};

export default LocationPicker;
