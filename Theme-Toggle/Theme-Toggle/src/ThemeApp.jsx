import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox";

const ThemeApp = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("appTheme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const appStyle = {
    backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "2rem",
    transition: "0.3s ease-in-out",
  };

  return (
    <div style={appStyle}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <ThemedBox theme={theme} text="Box 1" />
        <ThemedBox theme={theme} text="Box 2" />
        <ThemedBox theme={theme} text="Box 3" />
      </div>
    </div>
  );
};

export default ThemeApp;
