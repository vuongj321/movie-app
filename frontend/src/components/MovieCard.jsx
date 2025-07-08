import React from "react";
import { Heart } from "lucide-react";

const handleLike = () => {
  alert("Movie Liked");
};

const MovieCard = ({ movie }) => {
  return (
    <div className="relative h-125 w-75 rounded-lg bg-gray-100 m-3">
      <img
        className="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <button className="absolute right-1 top-1" onClick={handleLike}>
        <Heart className="text-red-300" />
      </button>

      <div className="text-lg leading-5 m-1">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
