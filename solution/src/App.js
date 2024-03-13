import React, { useState, useEffect } from "react";
import { isNameValid, getLocations } from "./mock-api/apis";
import { NameInput } from "./components/NameInput";
import { LocationSelect } from "./components/LocationSelect";
import { EntriesTable } from "./components/EntriesTable";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [entries, setEntries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);
  const [isCheckingName, setIsCheckingName] = useState(false);

  useEffect(() => {
    getLocations().then(setLocations);
  }, []);

  useEffect(() => {
    if (name) {
      // Loading state for name validation
      setIsCheckingName(true);

      // Debouncer to limit the number of requests
      const timer = setTimeout(() => {
        isNameValid(name).then((isValid) => {
          setIsCheckingName(false);
          if (!isValid) {
            setError("This name has already been taken");
          } else {
            setError(null);
          }
        });
      }, 200);

      // Clear the timer when the component unmounts and reset the loading state
      return () => {
        clearTimeout(timer);
        setIsCheckingName(false);
      };
    }
  }, [name, entries]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isCheckingName && !error && name && location) {
      setEntries((prevEntries) => [...prevEntries, { name, location }]);
      setName("");
      setLocation("");
    }
  };

  return (
    <div style={styles.main}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputs}>
          <NameInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error}
          />
          <LocationSelect
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            options={locations}
          />
        </div>
        <div style={styles.buttons}>
          <button onClick={() => setEntries([])} style={styles.button}>
            Clear
          </button>
          <button
            type="submit"
            style={styles.button}
            disabled={isCheckingName || error || !name || !location}
          >
            {isCheckingName ? "Loading" : "Add"}
          </button>
        </div>
      </form>
      <EntriesTable entries={entries} />
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  button: {
    marginBottom: "10px",
    width: "70px",
    height: "30px",
    fontSize: "16px",
    cursor: "pointer",
  },
  buttons: {
    alignSelf: "flex-end",
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    width: "80%",
  },
};

export default App;
