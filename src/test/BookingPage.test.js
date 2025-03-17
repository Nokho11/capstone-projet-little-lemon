import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// Simuler l'API fetchAPI et submitAPI
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

import { fetchAPI, submitAPI } from './api';

describe('BookingPage', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    jest.clearAllMocks();
  });

  test('should render the booking form correctly', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Vérifier que les champs de formulaire sont présents
    expect(screen.getByLabelText(/choisissez une date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choisissez une heure/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre d'invités/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/réserver maintenant/i)).toBeInTheDocument();
  });

  test('should handle date and time changes correctly', async () => {
    // Simuler la réponse de l'API
    fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);

    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Simuler la sélection de la date
    const dateInput = screen.getByLabelText(/choisissez une date/i);
    fireEvent.change(dateInput, { target: { value: '2025-03-17' } });

    // Vérifier que la fonction updateTimes a été appelée
    await waitFor(() => expect(fetchAPI).toHaveBeenCalledWith('2025-03-17'));
    expect(screen.getByLabelText(/choisissez une heure/i)).toHaveTextContent('18:00');
  });

  test('should show error when date or time is not selected', async () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );

    const submitButton = screen.getByText(/réserver maintenant/i);
    fireEvent.click(submitButton);

    // Vérifier si le message d'erreur est affiché
    expect(screen.getByText(/veuillez sélectionner une date et une heure/i)).toBeInTheDocument();
  });

  test('should submit the form and navigate on success', async () => {
    // Simuler la réponse de l'API pour la soumission
    submitAPI.mockResolvedValue(true);
    fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);

    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Simuler la sélection d'une date et d'une heure
    const dateInput = screen.getByLabelText(/choisissez une date/i);
    const timeSelect = screen.getByLabelText(/choisissez une heure/i);
    
    fireEvent.change(dateInput, { target: { value: '2025-03-17' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    const submitButton = screen.getByText(/réserver maintenant/i);
    fireEvent.click(submitButton);

    // Attendre que la navigation se produise
    await waitFor(() => expect(submitAPI).toHaveBeenCalledWith({ date: '2025-03-17', time: '18:00' }));
    expect(window.location.pathname).toBe('/confirmation');
  });

  test('should show an error message when API fails to submit', async () => {
    // Simuler une erreur dans l'appel à l'API
    submitAPI.mockRejectedValue(new Error('API Error'));
    fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);

    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Simuler la sélection d'une date et d'une heure
    const dateInput = screen.getByLabelText(/choisissez une date/i);
    const timeSelect = screen.getByLabelText(/choisissez une heure/i);

    fireEvent.change(dateInput, { target: { value: '2025-03-17' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    const submitButton = screen.getByText(/réserver maintenant/i);
    fireEvent.click(submitButton);

    // Vérifier si un message d'erreur est affiché
    await waitFor(() => expect(screen.getByText(/une erreur est survenue avec l'api/i)).toBeInTheDocument());
  });
});
