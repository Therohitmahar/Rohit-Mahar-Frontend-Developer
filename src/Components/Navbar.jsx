import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useData } from "../Context/Context";

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);
  const { setShowNav, showNav } = useData();
  useEffect(() => {
    window.addEventListener("scroll", () => {
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
      <label className={"burger"} htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={showNav}
          onChange={(e) => setShowNav(e.target.checked)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </nav>
  );
}
