import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="head-navbar">
      <ul className="ul-navbar">
        <Link to="/" className="li-navbar">
          Accueil
        </Link>
        <Link to="/ma-liste" className="li-navbar">
          Ma liste (latest)
        </Link>
        <Link to="/todo-list" className="li-navbar">
          Ma liste (new)
        </Link>
        <Link to="/contact" className="li-navbar">
          Contact
        </Link>
      </ul>
    </nav>
  );
}
