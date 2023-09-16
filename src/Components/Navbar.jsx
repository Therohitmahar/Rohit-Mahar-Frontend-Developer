import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src="https://drive.google.com/u/0/uc?id=18zFnFaWBYsLSIzahr_W80IU2aLdLQwIb&export=download"
            alt="Logo"
          />
        </Link>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/capsules">Capsules</Link>
        <Link to="/cores">Cores</Link>
        <Link to="/ships">Ships</Link>
        <Link>More</Link>
      </ul>
    </nav>
  );
}
