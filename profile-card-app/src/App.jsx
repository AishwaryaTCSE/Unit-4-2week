
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Profile Card</h1>

      <ProfileCard
        name="Aishwarya"
        age={22}
        bio="A highly passionate full-stack developer in training at Masai School. Loves building 3D applications and working with Firebase."
      />

      <ProfileCard
        age={30}
      />
    </div>
  );
};

export default App;
