import { Wrapper, Selector } from "./person-input-style";

const options = [1, 2, 3, 4, 5, 6];

const PersonInput = ({ value, onClick }) => (
  <Wrapper>
    {options.map((option, index) => (
      <Selector
        active={value === option}
        key={index}
        onClick={() => onClick(option)}
      >
        {option}
      </Selector>
    ))}
  </Wrapper>
);

export default PersonInput;
