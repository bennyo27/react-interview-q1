export function LocationSelect({ value, onChange, options }) {
  return (
    <div>
      <label>Location</label>
      <select value={value} onChange={onChange} style={styles.locationSelect}>
        <option value="">Select a location</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  locationSelect: {
    marginLeft: "10px",
    marginBottom: "10px",
    width: "200px",
    height: "30px",
    fontSize: "16px",
  },
};
