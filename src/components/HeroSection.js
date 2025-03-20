import React from "react";
import heroImage from "../assets/restaurant.jpg"; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Petit Citron</h1>
        <h2>Chicago</h2>
        <p>
          Nous sommes un restaurant méditerranéen familial, axé sur des recettes traditionnelles servies avec une touche moderne.
        </p>
        <button className="reserve-button">Réserver une table</button>
      </div>
      <img src={heroImage} alt="Restaurant" className="hero-image" />
    </div>
  );
};

export default HeroSection;
