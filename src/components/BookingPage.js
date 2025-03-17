import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Utiliser useNavigate pour la navigation après la soumission

// Fonction pour initialiser les horaires disponibles avec l'API
const initializeTimes = async () => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];  // Format de la date YYYY-MM-DD
  const availableTimes = await fetchAPI(dateStr);  // Récupère les horaires disponibles via l'API
  return availableTimes;
};

const BookingPage = () => {
  // Utilisation de useState pour gérer les horaires disponibles, la date et l'heure sélectionnée
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');  // Ajouter l'état pour l'heure sélectionnée
  const [error, setError] = useState(null);  // Gérer les erreurs d'API
  const [isLoading, setIsLoading] = useState(false); // Ajouter un état pour savoir si on est en chargement
  const navigate = useNavigate();  // Hook pour naviguer vers une page de confirmation

  // Charger les horaires pour la date actuelle au premier rendu
  useEffect(() => {
    const fetchInitialTimes = async () => {
      setIsLoading(true); // Démarrer le chargement
      try {
        const times = await initializeTimes();  // Appel API pour obtenir les horaires
        setAvailableTimes(times);
      } catch (err) {
        setError('Impossible de récupérer les horaires disponibles.');
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    fetchInitialTimes();
  }, []);  // Ce useEffect se déclenche uniquement au premier rendu

  // Fonction pour mettre à jour les horaires disponibles avec la date sélectionnée
  const updateTimes = async (newDate) => {
    setIsLoading(true); // Démarrer le chargement
    try {
      const times = await fetchAPI(newDate);  // Appel API pour obtenir les horaires en fonction de la nouvelle date
      setAvailableTimes(times);  // Mettre à jour les horaires
    } catch (err) {
      setError('Impossible de récupérer les horaires pour cette date.');
    } finally {
      setIsLoading(false); // Fin du chargement
    }
  };

  // Gérer le changement de la date sélectionnée
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);  // Met à jour la date sélectionnée
    updateTimes(date);  // Met à jour les horaires disponibles en fonction de la date
  };

  // Gérer le changement de l'heure sélectionnée
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);  // Met à jour l'heure sélectionnée
  };

  // Fonction pour soumettre la réservation
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifier si la date et l'heure sont sélectionnées
    if (!selectedDate || !selectedTime) {
      setError('Veuillez sélectionner une date et une heure');
      return;
    }

    try {
      // Appel à l'API pour soumettre la réservation
      const formData = { date: selectedDate, time: selectedTime };
      const result = await submitAPI(formData);  // Appel API pour soumettre la réservation

      if (result) {
        // Si la réservation est réussie, naviguer vers la page de confirmation
        navigate('/confirmation');
      } else {
        setError('Une erreur est survenue lors de la réservation. Essayez à nouveau.');
      }
    } catch (error) {
      setError('Une erreur est survenue avec l\'API.');
    }
  };

  return (
    <div>
      <h2>Réservez votre table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Choisissez une date :
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </label>

        <label>
          Choisissez une heure :
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Sélectionnez une heure</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </label>

        {/* Afficher l'erreur s'il y en a une */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Afficher un message de chargement pendant la récupération des horaires */}
        {isLoading && <p>Chargement des horaires disponibles...</p>}

        <button type="submit">Réserver maintenant</button>
      </form>
    </div>
  );
};

export default BookingPage;
