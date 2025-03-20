import React from 'react';
import { Link } from 'react-router-dom'; // Ajout de l'importation de Link
import './HomePage.css';
//import HeroSection from '.components/HeroSection';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon <span>Chicago</span></h1>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          
          {/* Lien vers la page de réservation */}
          <Link to="/booking">  {/* Changez "BookingPage" en "/booking" */}
            <button className="cta">Reserve a Table</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/Assets/hero-image.jpg" alt="Delicious food" />
        </div>
      </section>

      <section className="specials">
        <h2>This week's specials!</h2>
        <div className="specials-container">
          <div className="special">
            <img src="/Assets/greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad <span>$12.99</span></h3>
            <p>The famous Greek salad with crispy lettuce, peppers, olives, and Chicago-style feta cheese.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
          <div className="special">
            <img src="/Assets/bruschetta.jpg" alt="Bruschetta" />
            <h3>Bruschetta <span>$5.89</span></h3>
            <p>Grilled bread with garlic, olive oil, and fresh tomatoes.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
          <div className="special">
            <img src="/Assets/lemon-dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert <span>$5.00</span></h3>
            <p>Sweet and tangy lemon dessert made from grandma’s recipe.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
