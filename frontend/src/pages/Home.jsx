import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovie } from "../services/api";
import { Loader } from "lucide-react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setMovies(await getPopularMovies());
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await searchMovie(searchQuery);
      setMovies(searchResult);
    } catch (err) {
      console.log(err);
      setError("Failed to search for movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex justify-center">
        <form onSubmit={handleSearch}>
          <input
            className="border-1 p-1 m-1 bg-gray-100 rounded-xl"
            type="text"
            placeholder="Search for movies..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border-1 p-1 m-1 bg-gray-100 rounded-lg">
            Search
          </button>
        </form>
      </div>

      {error && <div>{error}</div>}

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
