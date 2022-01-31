import { Wrapper, ButtonContainer } from "./filter-style";
import FilterInput from "../filter-input";
import PrimaryButton from "../../primitives/primary-button";
import { ReactComponent as Search } from "../../../media/icons/search.svg";

const Filter = ({ setShowFilter }) => (
  <Wrapper>
    <FilterInput
      setShowFilter={() => setShowFilter("location")}
      label="Location"
      subText="Select a city and district"
    />
    <FilterInput
      setShowFilter={() => setShowFilter("date")}
      label="Date"
      subText="On which day?"
    />
    <FilterInput
      setShowFilter={() => setShowFilter("time")}
      label="Time"
      subText="At what time?"
    />
    <ButtonContainer>
      <PrimaryButton>
        <Search />
      </PrimaryButton>
    </ButtonContainer>
  </Wrapper>
);

export default Filter;
