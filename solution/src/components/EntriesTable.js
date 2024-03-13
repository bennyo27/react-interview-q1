export function EntriesTable({ entries }) {
  return (
    <table style={styles.entriesTable}>
      <thead>
        <tr>
          <th style={styles.head}>Name</th>
          <th style={styles.head}>Location</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr
            key={index}
            style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
          >
            <td>{entry.name}</td>
            <td>{entry.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  head: {
    backgroundColor: "lightgray",
  },
  entriesTable: {
    width: "100%",
    textAlign: "left",
    margin: "auto",
  },
  evenRow: {
    backgroundColor: "#f2f2f2", // This should be the color for even rows
  },
  oddRow: {
    backgroundColor: "#ffffff", //
  },
};
