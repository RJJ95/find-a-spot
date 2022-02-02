const PersonInput = ({ value, onChange }) => (
  <input
    min={1}
    max={8}
    type="number"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="1"
  />
);

export default PersonInput;
