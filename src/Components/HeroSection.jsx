import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <main>
      <section>
        <div className="hero-info">
          <h3>Our Product</h3>
          <h1>All Capsules </h1>
          <button className="primary-btn">Learn More</button>
        </div>
        <img
          src="https://drive.google.com/u/0/uc?id=1DHlX635p7JPrZAhk_PdHspljimu8lUEA&export=download"
          alt="Hero"
        />
      </section>
      <section>
        <div className="hero-info">
          <h3>Upcoming Launch</h3>
          <h1>Flight Cores </h1>
          <button className="primary-btn">Learn More</button>
        </div>
        <img
          className="Hero-img2"
          src="https://drive.google.com/u/0/uc?id=1mzFZdS6zbGdi9VbW4dugz6ND32ytTM8s&export=download"
          alt="Hero"
        />
      </section>
      <section>
        <div className="hero-info">
          <h1>Mission Ships</h1>
          <button className="primary-btn">Learn More</button>
        </div>
        <img src="https://drive.google.com/u/0/uc?id=1dwMAIsi3j00Y27LdXxqDFdYWHNwEt6gu&export=download" />
      </section>
    </main>
  );
}
