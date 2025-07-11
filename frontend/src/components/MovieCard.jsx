import React from "react";
import { Heart } from "lucide-react";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const handleLike = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="relative h-125 w-75 rounded-lg bg-gray-100 m-3">
      <img
        className="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <button className="absolute right-1 top-1" onClick={handleLike}>
        {<Heart className={`${favorite ? "text-red-300" : "text-white"}`} />}
      </button>

      <div className="text-lg leading-5 m-1">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
