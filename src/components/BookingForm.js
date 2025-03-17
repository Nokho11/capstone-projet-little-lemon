import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importer useNavigate pour la redirection

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [error, setError] = useState(null);  // Ajouter un état pour les erreurs
  const navigate = useNavigate();  // Hook pour naviguer après soumission

  // Fonction pour gérer le changement de date
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    updateTimes(newDate);  // Met à jour les heures disponibles en fonction de la date sélectionnée
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérification de la présence de la date et de l'heure
    if (!selectedDate || !selectedTime) {
      setError('Veuillez choisir une date et une heure.');
      return;
    }

    // Construire les données du formulaire
    const formData = { selectedDate, selectedTime, guests, occasion };

    try {
      // Appeler l'API pour soumettre la réservation (simulé ici)
      const response = await submitAPI(formData);  // Remplacer par votre fonction d'API réelle

      // Si l'API renvoie un succès, rediriger vers la page de confirmation
      if (response.success) {
        navigate('/confirmation');  // Redirection vers la page de confirmation
      } else {
        setError('Une erreur est survenue lors de la réservation.');
      }
    } catch (error) {
      setError('Une erreur est survenue avec l\'API.');
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Réservez votre table</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '500px', gap: '20px' }}>
        {/* Sélectionner une date */}
        <label htmlFor="res-date">Choisissez une date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />

        {/* Sélectionner une heure */}
        <label htmlFor="res-time">Choisissez une heure</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="" disabled>Choisissez une heure</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>

        {/* Nombre d'invités */}
        <label htmlFor="guests">Nombre d'invités</label>
        <input
          type="number"
          id="guests"
          value={guests}
          min="1"
          max="20"
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        {/* Occasion (facultatif) */}
        <label htmlFor="occasion">Occasion (ex : anniversaire)</label>
        <input
          type="text"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        />

        {/* Affichage de l'erreur s'il y en a une */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Bouton de soumission */}
        <button type="submit">Réserver maintenant</button>
      </form>
    </div>
  );
};

export default BookingForm;
