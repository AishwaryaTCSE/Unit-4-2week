
import { useState } from "react";
import CorrectedText from "./CorrectedText";

const AutoCorrectApp = () => {
  const [inputText, setInputText] = useState("");

  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their"
  };

  return (
    <div style={styles.container}>
      <h2>AutoCorrect App</h2>
      <textarea
        placeholder="Type your sentence here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={4}
        style={styles.textarea}
      />
      <CorrectedText text={inputText} corrections={corrections} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    marginBottom: "20px"
  }
};

export default AutoCorrectApp;
