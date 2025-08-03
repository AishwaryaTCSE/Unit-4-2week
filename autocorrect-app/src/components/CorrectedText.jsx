
const CorrectedText = ({ text, corrections }) => {
  const words = text.split(" ");
  let correctionCount = 0;

  const correctedWords = words.map((word) => {
    const cleanWord = word.toLowerCase();
    if (corrections[cleanWord]) {
      correctionCount++;
      return corrections[cleanWord];
    }
    return word;
  });

  return (
    <div>
      <p><strong>Corrected Text:</strong> {correctedWords.join(" ")}</p>
      <p style={{ color: "green" }}>Words corrected: {correctionCount}</p>
    </div>
  );
};

export default CorrectedText;
