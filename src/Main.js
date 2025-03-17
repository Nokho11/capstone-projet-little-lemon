// src/components/Main.js
import React, { useReducer } from 'react';
import BookingForm from './components/BookingForm';

// Initialisation des horaires disponibles
const initializeTimes = () => {
  return [
    "17:00", "18:00", "19:00", "20:00", "21:00"
  ];
};

// Reducer pour gérer les changements d'heures disponibles
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.newTimes;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes());

  const updateTimes = (newDate) => {
    dispatch({ type: 'UPDATE_TIMES', newTimes: initializeTimes() });
  };

  return (
    <div>
      {/* Présentation du restaurant */}
      <section className="restaurant-presentation">
        {/*  <h1>Bienvenue chez Petit Citron</h1>
        <p>Votre restaurant préféré à Chicago, servant la meilleure cuisine !</p> */}
      </section>

      {/* Formulaire de réservation */}
      <section className="booking-form">
     {/*  <button className="cta-button">Réserver une table</button> */}
        <h2>Réservez votre table</h2>
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      </section>
    </div>
  );
};

export default Main;
