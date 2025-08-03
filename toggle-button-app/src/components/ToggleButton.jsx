
import { useState } from "react";

const ToggleButton = ({ label }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={styles.container}>
      {label && <span style={{ marginRight: "10px", fontWeight: "bold" }}>{label}</span>}
      <button
        onClick={toggleState}
        style={{
          ...styles.button,
          backgroundColor: isOn ? "#d4ffd4" : "#ffd4d4",
          color: isOn ? "green" : "red",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    border: "2px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ToggleButton;
