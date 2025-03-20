import React, { useState } from "react";
import "./OrderOnline.css";

const menuItems = [
  { id: 1, name: "Salade Grecque", price: 8.99 },
  { id: 2, name: "Bruschetta", price: 6.50 },
  { id: 3, name: "Pâtes au pesto", price: 12.99 },
  { id: 4, name: "Pizza Margherita", price: 10.99 },
  { id: 5, name: "Tiramisu", price: 5.50 }
];

const OrderOnline = () => {
  const [cart, setCart] = useState([]);

  // Ajoute un élément au panier
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Vérifie si l'élément est déjà dans le panier
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        // Si l'élément est déjà dans le panier, on augmente la quantité
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Si l'élément n'est pas dans le panier, on l'ajoute avec une quantité de 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Retire un élément du panier
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Supprime l'élément si la quantité atteint 0
    );
  };

  // Calcule le total du panier en fonction de la quantité et du prix
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="order-container">
      <h1>Commander en ligne</h1>

      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h2>{item.name}</h2>
            <p className="price">{item.price.toFixed(2)} €</p>
            <button onClick={() => addToCart(item)}>Ajouter</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Votre panier</h2>
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - {(item.price * item.quantity).toFixed(2)} €
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">-</button>
              </li>
            ))}
          </ul>
        )}

        {/* Affichage du total */}
        {cart.length > 0 && (
          <h3 className="total-price">Total: {totalPrice} €</h3>
        )}

        <button className="checkout-btn" disabled={cart.length === 0}>
          Valider la commande
        </button>
      </div>
    </div>
  );
};

export default OrderOnline;
