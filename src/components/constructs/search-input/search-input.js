import { Input } from "./search-input-style";

const SearchInput = ({ placeholder, value, onChange }) => (
  <Input
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
