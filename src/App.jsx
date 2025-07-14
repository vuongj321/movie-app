import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
    <div>
      <MovieProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MovieProvider>
    </div>
  );
};

export default App;
