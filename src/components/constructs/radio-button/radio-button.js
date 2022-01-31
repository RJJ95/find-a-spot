import {
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  StyledCheckbox,
  Span,
} from "./radio-button-style";

const Checkbox = ({ checked, onChange, label }) => (
  <label>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Span>{label}</Span>
    </CheckboxContainer>
  </label>
);

export default Checkbox;
