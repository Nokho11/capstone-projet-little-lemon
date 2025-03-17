// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Importez le fichier CSS

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Little Lemon Restaurant</h1>
      <p>Your favorite restaurant in Chicago, serving the best food!</p>
      <p>Book your table now and experience the best dining experience.</p>
     {/* <button className="cta">Book a Table</button> */}
    </div>
  );
};

export default HomePage;
