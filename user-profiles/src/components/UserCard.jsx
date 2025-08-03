// src/components/UserCard.jsx

const UserCard = ({ name, email, city }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    backgroundColor: "#f7f7f7",
    width: "250px",
  },
};

export default UserCard;
