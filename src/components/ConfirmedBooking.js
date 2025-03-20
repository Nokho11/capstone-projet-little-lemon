// src/components/ConfirmedBooking.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css'; // Ajoute un fichier CSS pour le style

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-container">
      <h2>🎉 Réservation confirmée !</h2>
      <p>Merci d'avoir réservé chez <strong>Little Lemon</strong> ! Nous avons hâte de vous accueillir. 🍽️</p>
      <Link to="/" className="home-button">Retour à l'accueil</Link>
    </div>
  );
};

export default ConfirmedBooking;
