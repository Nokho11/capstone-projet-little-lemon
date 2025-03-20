import React from 'react';
import './Footer.css'; // On applique les styles via un fichier CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-about">
          <h2>À propos de Petit Citron</h2>
          <p>
            Un restaurant méditerranéen à Chicago, offrant une cuisine traditionnelle avec une touche moderne. Visitez-nous et découvrez notre passion pour la bonne cuisine.
          </p>
        </section>

        <section className="footer-links">
          <h2>Liens utiles</h2>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/booking">Réserver une table</a></li>
          </ul>
        </section>

        <section className="footer-social">
          <h2>Suivez-nous</h2>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Petit Citron. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
