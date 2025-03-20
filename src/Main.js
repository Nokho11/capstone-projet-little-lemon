import React, { useReducer, useState } from 'react';
import BookingForm from './components/BookingForm';

// Fonction pour initialiser les horaires disponibles
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

// Reducer pour gérer les horaires disponibles
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes(); // Toujours retourne les horaires par défaut
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes());
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const updateTimes = (newDate) => {
    dispatch({ type: 'UPDATE_TIMES' }); // Action pour mettre à jour les horaires
  };

  const handleReservationSuccess = () => {
    setReservationSuccess(true);

    // Masquer le message après 5 secondes
    setTimeout(() => setReservationSuccess(false), 5000);
  };

  return (
    <div>
      <section className="restaurant-presentation">
        <h1>Bienvenue chez Petit Citron</h1>
        <p>Votre restaurant préféré à Chicago, servant la meilleure cuisine !</p>
      </section>

      <section className="booking-form">
        <h2>Réservez votre table</h2>
        <BookingForm 
          availableTimes={availableTimes} 
          updateTimes={updateTimes} 
          onSuccess={handleReservationSuccess} 
        />
        {reservationSuccess && <p className="success-message">Réservation réussie !</p>}
      </section>
    </div>
  );
};

export default Main;
