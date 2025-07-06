import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/w1280/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
      title: "One Piece",
      year: "1999",
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/w1280/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
      title: "Naruto",
      year: "2002",
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/w1280/4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg",
      title: "Real Steel",
      year: "2011",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

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
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
