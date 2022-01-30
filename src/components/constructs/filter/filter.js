import { Wrapper } from "./filter-style";
import FilterInput from "../filter-input";

const Filter = () => (
  <Wrapper>
    <FilterInput label="Location" subText="Select a city and district" />
    <FilterInput label="Date" subText="On which day?" />
    <FilterInput label="Time" subText="At what time?" />
  </Wrapper>
);

export default Filter;
