import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import ChildComponent from "./ChildComponent";
import "./index.css";

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
