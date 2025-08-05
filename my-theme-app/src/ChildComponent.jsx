import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ChildComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`child ${theme}`}>
      I am a {theme} themed component!
    </div>
  );
};

export default ChildComponent;
