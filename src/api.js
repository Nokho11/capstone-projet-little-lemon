// src/api.js
export const fetchAPI = async (date) => {
    try {
      const response = await fetch(`https://api.example.com/times?date=${date}`);
      const data = await response.json();
      return data; // Retourner les horaires disponibles
    } catch (error) {
      console.error("Erreur lors de la récupération des horaires :", error);
      return [];
    }
  };
  // src/api.js
export const submitAPI = async (formData) => {
    try {
      const response = await fetch('https://api.example.com/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      return result; // Retourner la réponse de l'API (ex: succès ou échec)
    } catch (error) {
      console.error("Erreur lors de la soumission de la réservation :", error);
      throw new Error("Erreur lors de la soumission de la réservation");
    }
  };
  