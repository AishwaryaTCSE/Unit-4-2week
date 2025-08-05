import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className="brand">MovieSearch</Link>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </main>

      <footer className="footer">Built with OMDb API</footer>
    </div>
  );
}
