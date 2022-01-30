import { Wrapper, Label, SubText } from "./filter-input-style";

const FilterInput = ({ label, subText }) => (
  <Wrapper>
    <Label>{label}</Label>
    <SubText>{subText}</SubText>
  </Wrapper>
);

export default FilterInput;
