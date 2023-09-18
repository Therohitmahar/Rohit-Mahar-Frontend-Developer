import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <span>SPACEX © 2023</span>
      <span>Privacy Policy</span>
      <span>Suppliers</span>
      <span>
        <Link to="https://github.com/Therohitmahar/Rohit-Mahar-Frontend-Developer">
          Developed by Rohit mahar
        </Link>
      </span>
    </footer>
  );
}
