import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Main() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <main style={{ padding: "1rem" }}>
      {isAuthenticated
        ? <p>You are logged in — welcome back!</p>
        : <p>Please log in to continue.</p>}
    </main>
  );
}
