import { Wrapper, ButtonContainer } from "./filter-style";
import FilterInput from "../filter-input";
import PrimaryButton from "../../primitives/primary-button";
import { ReactComponent as Search } from "../../../media/icons/search.svg";

const Filter = ({ setActiveFilter, selectedDate, selectedDistricts }) => {
  return (
    <Wrapper>
      <FilterInput
        setShowFilter={() =>
          setActiveFilter((prevState) =>
            prevState === "location" ? "" : "location"
          )
        }
        label="Location"
        subText={
          selectedDistricts.length > 0
            ? selectedDistricts.join(", ")
            : "Select a location"
        }
      />
      <FilterInput
        type="date"
        setShowFilter={() =>
          setActiveFilter((prevState) => (prevState === "date" ? "" : "date"))
        }
        label="Date"
        subText={
          selectedDate
            ? new Date(selectedDate).toLocaleDateString()
            : "On what day?"
        }
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
