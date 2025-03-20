import React from 'react';
import './Specializations.css';

const specializationsData = [
  {
    icon: "/images/icons/mediterranean.png",
    title: "Mediterranean Cuisine",
    description: "Authentic Mediterranean dishes made with fresh ingredients."
  },
  {
    icon: "/images/icons/fresh-ingredients.png",
    title: "Fresh Ingredients",
    description: "We use only the freshest local produce and organic spices."
  },
  {
    icon: "/images/icons/healthy.png",
    title: "Healthy Options",
    description: "A variety of nutritious meals with balanced flavors."
  }
];

const Specializations = () => {
  return (
    <div className="specializations">
      <h1>Our Specializations</h1>
      <p>We specialize in Mediterranean cuisine and fresh ingredients.</p>
      <div className="specialization-list">
        {specializationsData.map((item, index) => (
          <div key={index} className="specialization-item">
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specializations;
