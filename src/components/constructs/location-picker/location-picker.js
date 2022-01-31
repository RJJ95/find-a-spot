import {
  Wrapper,
  SearchContainer,
  LocationContainer,
} from "./location-picker-style";

// Components
import SearchInput from "../search-input";
import LocationList from "../location-list";

const LocationPicker = () => (
  <Wrapper>
    <SearchContainer>
      <SearchInput placeholder="Search for a city" />
    </SearchContainer>
    <LocationContainer>
      <LocationList listTitle="City" list={[{ name: "Amsterdam" }]} />
      <LocationList listTitle="District" list={[{ name: "Centrum" }]} />
    </LocationContainer>
  </Wrapper>
);

export default LocationPicker;
