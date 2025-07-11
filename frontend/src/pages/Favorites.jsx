import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    console.log(favorites);
    return (
      <div className="bg-gray-300 min-h-screen">
        <div className="flex justify-center flex-wrap">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-gray-300 min-h-screen">
      <div className="text-3xl">
        <h1>No favorites yet...</h1>
      </div>
    </div>
  );
};

export default Favorites;
