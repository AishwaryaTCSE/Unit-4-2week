// src/App.jsx
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const query = search.toLowerCase();
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Failed to fetch user data. Please try again later.</p>}

      {!loading && !error && (
        <>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />

          <div style={styles.cardGrid}>
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                city={user.address.city}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },
  input: {
    padding: "8px",
    marginBottom: "20px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #aaa",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
};

export default App;
