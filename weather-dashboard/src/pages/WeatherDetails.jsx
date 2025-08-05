
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "b8a14a66b0ccaa2f12e2a8e968a0c185";

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  if (!weather) return <p>Loading...</p>;

  if (weather.cod !== 200) return <p>City not found</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Weather in {weather.name}</h2>
      <p>🌡️ Temperature: {weather.main.temp} °C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>⛅ Condition: {weather.weather[0].description}</p>

      <iframe
        title="map"
        width="100%"
        height="400"
        style={{ marginTop: "1rem" }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBfDnYKJEFWm74AiYDPxC_BVAcd4xUL7Ns&q=${weather.name}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WeatherDetails;
