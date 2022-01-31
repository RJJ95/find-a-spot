import { useState } from "react";

// Styles
import { Wrapper, LeftColumn, RightColumn, MainTitle } from "./home-style";

// Components
import Filter from "../../constructs/filter";
import LocationPicker from "../../constructs/location-picker";

const Home = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <MainTitle>find your spot.</MainTitle>
      </LeftColumn>
      <RightColumn>
        <Filter />
      </RightColumn>
    </Wrapper>
  );
};

export default Home;
