import React from "react";

const ThemedBox = ({ theme, text }) => {
  const boxStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#eee",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: theme === "light"
      ? "0 2px 8px rgba(0,0,0,0.1)"
      : "0 2px 8px rgba(255,255,255,0.1)",
    transition: "0.3s ease-in-out",
    flex: 1,
    textAlign: "center",
  };

  return <div style={boxStyle}>{text}</div>;
};

export default ThemedBox;
