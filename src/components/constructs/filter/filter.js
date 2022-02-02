import { Wrapper, ButtonContainer } from "./filter-style";
import FilterInput from "../filter-input";
import PrimaryButton from "../../primitives/primary-button";
import { ReactComponent as Search } from "../../../media/icons/search.svg";

const Filter = ({ setActiveFilter }) => {
  return (
    <Wrapper>
      <FilterInput
        setShowFilter={() =>
          setActiveFilter((prevState) =>
            prevState === "location" ? "" : "location"
          )
        }
        label="Location"
        subText="Pick a location."
      />
      <FilterInput
        setShowFilter={() =>
          setActiveFilter((prevState) => (prevState === "date" ? "" : "date"))
        }
        label="Date"
        subText="On which day?"
      />
      <FilterInput
        setShowFilter={() =>
          setActiveFilter((prevState) => (prevState === "time" ? "" : "time"))
        }
        label="Time"
        subText="At what time?"
      />
      <FilterInput
        setShowFilter={() =>
          setActiveFilter((prevState) =>
            prevState === "people" ? "" : "people"
          )
        }
        label="People"
        subText="How many guests?"
      />
      <ButtonContainer>
        <PrimaryButton>
          <Search />
        </PrimaryButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Filter;
