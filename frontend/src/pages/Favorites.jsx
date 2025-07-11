import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    console.log(favorites);
    return (
      <div>
        <div className="flex justify-center flex-wrap">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>No favorites yet...</h1>
    </div>
  );
};

export default Favorites;
