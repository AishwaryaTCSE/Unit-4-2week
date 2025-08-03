import { useEffect, useState, useRef } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);
  const audioRef = useRef(
    new Audio("https://www.soundjay.com/button/sounds/beep-07.mp3")
  );

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === targetTime) {
      // Play sound
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log("Beep! Target time reached.");
        });
      }
    }
  }, [seconds, targetTime]);

  const handleStart = () => {
    if (!isRunning) setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };

  return (
    <div style={styles.container}>
      <h1>⏱ Stopwatch</h1>
      <h2>{seconds} seconds</h2>

      <div style={styles.buttons}>
        <button onClick={handleStart} style={styles.button}>Start</button>
        <button onClick={handleStop} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Set target time (seconds): </label>
        <input
          type="number"
          value={targetTime}
          onChange={(e) => setTargetTime(Number(e.target.value))}
          style={styles.input}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  input: {
    padding: "5px",
    width: "60px",
    textAlign: "center",
    fontSize: "16px",
  },
};

export default App;
