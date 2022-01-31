import { useState } from "react";

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
  const [activeFilter, setActiveFilter] = useState("");
  return (
    <Wrapper>
      <LeftColumn>
        <MainTitle>find your spot.</MainTitle>
      </LeftColumn>
      <RightColumn>
        <Filter setActiveFilter={setActiveFilter} />
        {activeFilter === "location" && (
          <LocationPickerContainer>
            <LocationPicker />
          </LocationPickerContainer>
        )}
      </RightColumn>
    </Wrapper>
  );
};

export default Home;
