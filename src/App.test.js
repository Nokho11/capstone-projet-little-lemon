import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Un wrapper Router est nécessaire pour que React Router fonctionne dans les tests
const renderWithRouter = (ui) => {
  return render(<Router>{ui}</Router>);
};

test('renders HomePage and navigates to BookingPage', async () => {
  renderWithRouter(<App />);

  // Vérifiez que le texte "Réservez votre table" est présent sur la page d'accueil
  const homeText = screen.getByText(/Réservez votre table/i);
  expect(homeText).toBeInTheDocument();

  // Naviguer vers la page de réservation via un clic sur le lien ou un bouton de navigation
  const bookingLink = screen.getByRole('link', { name: /Réserver maintenant/i });
  fireEvent.click(bookingLink);

  // Vérifier que la page de réservation se charge en vérifiant un élément spécifique sur cette page
  const bookingPageText = await screen.findByText(/Choisissez une date/i);
  expect(bookingPageText).toBeInTheDocument();
});

test('navigates to ConfirmationPage after booking form submission', async () => {
  renderWithRouter(<App />);

  // Accédez à la page de réservation
  const bookingLink = screen.getByRole('link', { name: /Réserver maintenant/i });
  fireEvent.click(bookingLink);

  // Remplir le formulaire de réservation
  const dateInput = screen.getByLabelText(/Choisissez une date/i);
  fireEvent.change(dateInput, { target: { value: '2025-03-18' } });

  const timeSelect = screen.getByLabelText(/Choisissez une heure/i);
  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  const submitButton = screen.getByRole('button', { name: /Réserver maintenant/i });
  fireEvent.click(submitButton);

  // Attendre la redirection vers la page de confirmation
  const confirmationText = await screen.findByText(/Réservation Confirmée/i);
  expect(confirmationText).toBeInTheDocument();
});

test('displays an error if date or time is not selected', async () => {
  renderWithRouter(<App />);

  // Accédez à la page de réservation
  const bookingLink = screen.getByRole('link', { name: /Réserver maintenant/i });
  fireEvent.click(bookingLink);

  // Ne remplissez pas les champs et essayez de soumettre
  const submitButton = screen.getByRole('button', { name: /Réserver maintenant/i });
  fireEvent.click(submitButton);

  // Vérifier que l'erreur apparaît
  const errorMessage = await screen.findByText(/Veuillez sélectionner une date et une heure/i);
  expect(errorMessage).toBeInTheDocument();
});
