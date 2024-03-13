export function NameInput({ value, onChange, error }) {
  return (
    <div>
      <label>Name </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={styles.nameInput}
      />
      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
}

const styles = {
  error: {
    color: "red",
    fontSize: "14px",
  },
  label: {
    marginRight: "10px",
  },
  nameInput: {
    marginLeft: "10px",
    marginBottom: "10px",
    width: "200px",
    height: "30px",
    fontSize: "16px",
  },
};
