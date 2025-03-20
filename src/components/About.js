import React from 'react';
import './About.css'; // On peut ajouter un style personnalisé si nécessaire

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>À propos de Petit Citron</h1>
        <p>
          Petit Citron est un restaurant méditerranéen familial situé à Chicago. Nous servons des plats traditionnels
          avec une touche moderne, en utilisant les ingrédients les plus frais pour offrir une expérience culinaire unique.
        </p>
      </section>

      <section className="about-history">
        <h2>Notre Histoire</h2>
        <p>
          Fondé en 2010 par la famille Lefevre, Petit Citron a rapidement été reconnu comme un lieu incontournable pour les amateurs de cuisine méditerranéenne à Chicago. Notre chef, une passionnée de cuisine traditionnelle méditerranéenne, s'inspire des recettes familiales tout en apportant une touche contemporaine à chaque plat.
        </p>
      </section>

      <section className="about-values">
        <h2>Nos Valeurs</h2>
        <ul>
          <li><strong>Authenticité</strong>: Nous privilégions des recettes traditionnelles, transmises de génération en génération.</li>
          <li><strong>Fraîcheur</strong>: Tous nos ingrédients sont soigneusement sélectionnés pour garantir la meilleure qualité.</li>
          <li><strong>Accueil</strong>: Nous mettons un point d'honneur à offrir à chaque client une expérience chaleureuse et accueillante.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Notre Équipe</h2>
        <p>
          Notre équipe est composée de passionnés de cuisine et de service, prêts à vous offrir le meilleur de la gastronomie méditerranéenne.
        </p>
        <p>Rencontrez notre chef et nos serveurs lors de votre prochaine visite et laissez-vous surprendre par leur dévouement.</p>
      </section>
    </div>
  );
};

export default About;
