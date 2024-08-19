import React from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const movie = {
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  };

  return (
    <>
      <NavBar />
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time} minutes</p>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
