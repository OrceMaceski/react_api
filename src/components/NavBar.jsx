import React from "react";
import { Link } from "react-router-dom";

// posts List Link (root path)

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Posts List</Link>
      { " | " }
      <Link to="/new">New Post</Link>
      { " | " }
      <Link to="/sign_in">Login</Link>
      { " | " }
      <Link to="/sign_up">Register</Link>
    </nav>
  );
}

export default NavBar;
