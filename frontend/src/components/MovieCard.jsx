import React from "react";
import { Heart } from "lucide-react";

const handleLike = () => {
  alert("Movie Liked");
};

const MovieCard = ({ movie }) => {
  return (
    <div className="relative h-125 w-75 rounded-lg bg-gray-100">
      <img className="rounded-t-lg" src={movie.image} alt={movie.title} />
      <button className="absolute right-1 top-1" onClick={handleLike}>
        <Heart className="text-red-300" />
      </button>

      <div className="text-lg">
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
