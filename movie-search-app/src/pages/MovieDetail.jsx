import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../api.js";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setError("");
      try {
        const data = await getMovieById(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found.");
        }
      } catch {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return (
    <div>
      <ErrorMessage message={error} />
      <Link to="/" className="backLink">← Back</Link>
    </div>
  );

  return (
    <div className="detail">
      <Link to="/" className="backLink">← Back</Link>
      <div className="detailCard">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={`${movie.Title} poster`}
          className="detailPoster"
        />
        <div className="detailInfo">
          <h2>{movie.Title} ({movie.Year})</h2>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
