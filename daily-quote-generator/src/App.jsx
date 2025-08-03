import { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Failed to fetch quote:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchQuote();

    // Set interval for every 30 seconds
    const intervalId = setInterval(() => {
      fetchQuote();
    }, 30000);

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div style={styles.container}>
      <h1>📝 Daily Quote Generator</h1>

      {loading ? (
        <div className="spinner" style={styles.spinner}></div>
      ) : (
        <div style={styles.quoteBox}>
          <p style={styles.content}>"{quote.content}"</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      )}

      <button onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  quoteBox: {
    margin: "20px auto",
    maxWidth: "600px",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  content: {
    fontSize: "20px",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  spinner: {
    margin: "40px auto",
    width: "40px",
    height: "40px",
    border: "5px solid #ccc",
    borderTop: "5px solid #007BFF",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default App;
