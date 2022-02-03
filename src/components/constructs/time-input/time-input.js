import { Input } from "./time-input-style";

const TimeInput = ({ value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="time"
      placeholder="00:00"
    />
  );
};

export default TimeInput;
