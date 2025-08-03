
import { useState } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={styles.button}>Increment</button>
      <button
        onClick={decrement}
        style={{ ...styles.button, opacity: count === 0 ? 0.5 : 1 }}
        disabled={count === 0}
      >
        Decrement
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
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;
