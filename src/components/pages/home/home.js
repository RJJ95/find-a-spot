import { Wrapper, P } from "./home-style";

// Components
import Filter from "../../constructs/filter";

const Home = () => {
  return (
    <Wrapper>
      <h1>find a spot.</h1>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </P>
      <Filter />
    </Wrapper>
  );
};

export default Home;
