// src/App.js
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage';
import Specializations from './components/Specializations';  // Assurez-vous que le chemin est correct
import ConfirmedBooking from './components/ConfirmedBooking';  // Assurez-vous que la page ConfirmedBooking est bien définie
import Main from './Main';

const App = () => {
  return (
    <Router>
      {/* Header et Nav, visibles sur toutes les pages */}
      <Header />
      <Nav />

      <Routes>
        {/* Route pour la page d'accueil avec le contenu principal */}
        <Route path="/" element={<HomePage />} />
        
        {/* Pour la page de réservation, afficher uniquement le formulaire de réservation */}
        <Route path="/booking" element={<BookingPage />} />
        
        {/* Page de confirmation de la réservation */}
        <Route path="/confirmation" element={<ConfirmedBooking />} />

        {/* Pages supplémentaires */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/specializations" element={<Specializations />} />
      </Routes>

      {/* Affichage du composant Main ici, sans répétition */}
      <Main />

      {/* Footer visible sur toutes les pages */}
      <Footer />
    </Router>
  );
};

export default App;
