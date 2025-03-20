import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';
import Main from '../Main';  // Importation du composant Main

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState('');  // L'état pour gérer les erreurs
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialTimes = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const times = await fetchAPI(today);
        setAvailableTimes(times);
      } catch (error) {
        console.error('Erreur lors de la récupération des horaires', error);
        setError('Nous avons rencontré un problème pour récupérer les horaires, veuillez réessayer.');
      }
    };
    fetchInitialTimes();
  }, []);

  const updateTimes = async (newDate) => {
    try {
      const times = await fetchAPI(newDate);
      setAvailableTimes(times);
      setError('');  // Réinitialiser l'erreur lors de la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour des horaires', error);
      setError('Nous avons rencontré un problème pour mettre à jour les horaires, veuillez réessayer.');
    }
  };

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmation');
    } else {
      setError('Erreur lors de la réservation. Veuillez réessayer.');
    }
  };

  return (
    <div className="booking-page">
      <Main />  {/* Intégration de Main dans la page de réservation */}
      
      {error && <p className="error-message">{error}</p>}  {/* Affichage de l'erreur si elle existe */}
    </div>
  );
};

export default BookingPage;
