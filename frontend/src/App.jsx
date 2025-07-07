import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
