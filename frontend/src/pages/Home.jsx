import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      setMovies(await getPopularMovies());
    };

    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSearch}>
          <input
            className="border-2 p-1 m-1"
            type="text"
            placeholder="Search for movies..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border-2 p-1 m-1">Search</button>
        </form>
      </div>
      <div className="flex justify-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
