
const ProfileCard = ({
  name = "Anonymous User",
  age,
  bio = "No biography available.",
}) => {

  const truncateBio = (text) => {
    if (text.length > 100) {
      return text.substring(0, 100) + "… Read More";
    }
    return text;
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.bio}>{truncateBio(bio)}</p>
    </div>
  );
};


const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    margin: "20px auto",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
  },
  name: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  age: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  bio: {
    fontSize: "14px",
    color: "#555",
  },
};

export default ProfileCard;
