import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-center">
      <Link to="/">MAIN</Link>
      <Link to="/add">ADD</Link>
    </div>
  );
}

export default Navbar;
