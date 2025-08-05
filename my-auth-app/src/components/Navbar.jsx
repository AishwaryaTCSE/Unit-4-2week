import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" }}>
      <h2>My App</h2>
      <button onClick={toggleAuth}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </nav>
  );
}
