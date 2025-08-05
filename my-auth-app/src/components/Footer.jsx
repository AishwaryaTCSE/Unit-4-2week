import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Footer() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <footer style={{ padding: "1rem", borderTop: "1px solid #ddd", textAlign: "center" }}>
      {isAuthenticated ? "Welcome, User" : "Please log in"}
    </footer>
  );
}
