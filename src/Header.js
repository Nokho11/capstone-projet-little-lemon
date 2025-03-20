import './Header.css'; // Assure-toi d'inclure ton fichier CSS ici
import Nav from './Nav';  // Importer Nav si tu l'utilises dans App.js

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="Assets/logo.jpg" alt="Little Lemon logo" className="logo" />

      </div>
      {/* Le menu sera intégré ici dans le Header */}
      <Nav /> {/* Ou tu peux juste inclure les liens de navigation si tu veux un contrôle total */}
    </header>
  );
}

export default Header;
