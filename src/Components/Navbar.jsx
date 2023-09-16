import React from "react";
import styles from "../Styles/Navbar.module.css";
import "../App.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://drive.google.com/u/0/uc?id=18zFnFaWBYsLSIzahr_W80IU2aLdLQwIb&export=download"
          alt="Logo"
        />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>More</li>
      </ul>
    </nav>
  );
}
