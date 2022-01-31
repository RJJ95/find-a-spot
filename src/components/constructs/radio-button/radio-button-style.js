import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #fff;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 150ms;
  margin-right: 10px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Span = styled.span`
  font-weight: ${({ checked }) => checked && "bold"};
`;
