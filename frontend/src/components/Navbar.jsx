import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end bg-gray-200">
      <a className="p-2" href="/">
        Home
      </a>
      <a className="p-2" href="/favorites">
        Favorites
      </a>
    </div>
  );
};

export default Navbar;
