import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';  // Adaptez le chemin en fonction de votre structure

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Réservez votre table/i); // Le texte que vous voulez tester
  expect(headingElement).toBeInTheDocument();
});
