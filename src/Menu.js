import React from "react";
import "./Menu.css";

const menuItems = [
  { id: 1, name: "Salade Grecque", description: "Salade fraîche avec feta, olives et concombre.", price: 8.99 },
  { id: 2, name: "Soupe du Jour", description: "Préparée avec des ingrédients frais et de saison.", price: 6.50 },
  { id: 3, name: "Pâtes Carbonara", description: "Pâtes fraîches avec sauce crémeuse au lard.", price: 12.99 },
  { id: 4, name: "Pizza Margherita", description: "Tomates, mozzarella, basilic sur pâte maison.", price: 10.99 },
  { id: 5, name: "Filet de Saumon", description: "Grillé avec une sauce citronnée et légumes.", price: 15.99 },
  { id: 6, name: "Tiramisu", description: "Dessert italien au café et mascarpone.", price: 7.50 },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Notre Menu</h1>
      <p>Découvrez nos délicieux plats préparés avec des ingrédients frais.</p>

      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span className="price">{item.price.toFixed(2)}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
