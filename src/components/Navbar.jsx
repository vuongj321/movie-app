import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end bg-gray-100 border-b-1">
      <Link className="p-2" to="/">
        Home
      </Link>
      <Link className="p-2" to="/favorites">
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
