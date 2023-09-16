import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <span>SPACEX © 2023</span>
        <span>Privacy Policy</span>
        <span>Suppliers</span>
        <span>
          <Link to="">Developed by Rohit mahar</Link>
        </span>
      </div>
    </footer>
  );
}
