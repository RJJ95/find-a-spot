const TimeInput = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="time"
    />
  );
};

export default TimeInput;
