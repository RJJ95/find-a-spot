import { Wrapper, Input, SpinnerContainer } from "./search-input-style";
import ClipLoader from "react-spinners/ClipLoader";

const SearchInput = ({ placeholder, value, onChange, isLoading }) => (
  <Wrapper>
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <SpinnerContainer>
      <ClipLoader color="#ececec" loading={isLoading} size={20} />
    </SpinnerContainer>
  </Wrapper>
);

export default SearchInput;
