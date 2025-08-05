import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={`${movie.Title} poster`}
        className="cardPoster"
      />
      <div className="cardBody">
        <h3 className="cardTitle">{movie.Title}</h3>
        <p className="cardYear">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="detailsBtn">
          View details
        </Link>
      </div>
    </div>
  );
}
