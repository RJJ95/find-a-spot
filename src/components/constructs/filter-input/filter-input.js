import { Wrapper, Label, SubText } from "./filter-input-style";

const FilterInput = ({ label, subText, setShowFilter }) => (
  <Wrapper onClick={setShowFilter}>
    <Label>{label}</Label>
    <SubText>{subText}</SubText>
  </Wrapper>
);

export default FilterInput;
