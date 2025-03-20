import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, onSuccess }) => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [nombreDePersonnes, setNombreDePersonnes] = useState(1); // Initialisé à 1
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
    setErrors((prev) => ({ ...prev, date: "" }));
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setErrors((prev) => ({ ...prev, selectedTime: "" }));
  };

  const handleNombreDePersonnesChange = (e) => {
    const value = Math.max(1, Math.min(20, Number(e.target.value))); // Toujours entre 1 et 20
    setNombreDePersonnes(value);
    setErrors((prev) => ({ ...prev, nombreDePersonnes: "" }));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    setErrors((prev) => ({ ...prev, occasion: "" }));
  };

  const resetForm = () => {
    setDate("");
    setSelectedTime("");
    setNombreDePersonnes(1);
    setOccasion("");
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!date) {
      newErrors.date = "Veuillez sélectionner une date.";
      valid = false;
    } else if (date < getTodayDate()) {
      newErrors.date = "La date ne peut pas être dans le passé.";
      valid = false;
    }

    if (!selectedTime) {
      newErrors.selectedTime = "Veuillez sélectionner un horaire.";
      valid = false;
    }

    if (nombreDePersonnes < 1 || nombreDePersonnes > 20) {
      newErrors.nombreDePersonnes = "Le nombre de personnes doit être entre 1 et 20.";
      valid = false;
    }

    if (!occasion.trim()) {
      newErrors.occasion = "Veuillez renseigner une occasion.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Réservation effectuée :", { date, selectedTime, nombreDePersonnes, occasion });

    if (onSuccess) {
      onSuccess();
    }

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date :
        <input type="date" value={date} onChange={handleDateChange} min={getTodayDate()} />
      </label>
      {errors.date && <p className="error-message">{errors.date}</p>}

      <label>
        Horaire :
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="">Sélectionner un horaire</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      {errors.selectedTime && <p className="error-message">{errors.selectedTime}</p>}

      <label>
        Nombre de personnes :
        <input 
          type="number" 
          value={nombreDePersonnes} 
          onChange={handleNombreDePersonnesChange} 
          min="1" 
          max="20"
        />
      </label>
      {errors.nombreDePersonnes && <p className="error-message">{errors.nombreDePersonnes}</p>}

      <label>
        Occasion :
        <input 
          type="text" 
          value={occasion} 
          onChange={handleOccasionChange} 
          placeholder="Ex : Anniversaire, dîner d'affaires..." 
        />
      </label>
      {errors.occasion && <p className="error-message">{errors.occasion}</p>}

      <button type="submit">Réserver</button>
    </form>
  );
};

export default BookingForm;
