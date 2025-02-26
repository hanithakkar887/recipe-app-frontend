import React, { useState, useEffect } from "react";
import "../style/Cart.css";

export const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  function loadCartFromLocalStorage() {
    const storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(storedCart);
  }

  function removeFromCart(index) {
    let updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">..............</h2>
      <div className="cart-grid">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt="No image" className="cart-image" />
              <div className="cart-details">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Type:</strong> {item.cuisine}</p>
                <p><strong>Price:</strong> {item.caloriesPerServing}</p>
                <p><strong>Rating:</strong> ⭐ {item.rating}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="cart-remove-btn"
              >
                 Remove
              </button>
            </div>
          ))
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};