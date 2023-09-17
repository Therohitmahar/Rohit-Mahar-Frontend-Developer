import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("inner", window.innerHeight);
      console.log("scrollY", window.screenY);
      if (window.scrollY > window.innerHeight) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);

  return (
    <nav className={showBackground ? "bg" : ""}>
      <div className="logo">
        <Link to="/">
          <img
            src="https://drive.google.com/u/0/uc?id=18zFnFaWBYsLSIzahr_W80IU2aLdLQwIb&export=download"
            alt="Logo"
          />
        </Link>
      </div>
      <ul className={showNav ? "show" : "hide"}>
        <Link to="/">Home</Link>
        <Link to="/capsules">Capsules</Link>
        <Link to="/cores">Cores</Link>
        <Link to="/ships">Ships</Link>
        <Link to="/humanship">Human Spaceflights</Link>
        <Link to="/starshield">Starshield</Link>
      </ul>
      <label class={"burger"} htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          value={showNav}
          onChange={() => setShowNav(!showNav)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </nav>
  );
}
