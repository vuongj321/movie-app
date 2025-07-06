import React from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <div>
      <MovieCard
        movie={{
          image:
            "https://www.themoviedb.org/t/p/w1280/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
          title: "One Piece",
          year: "1999",
        }}
      />

      <MovieCard
        movie={{
          image:
            "https://www.themoviedb.org/t/p/w1280/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
          title: "Naruto",
          year: "2002",
        }}
      />
    </div>
  );
};

export default App;
