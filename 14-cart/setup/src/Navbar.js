import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <h2>Cart App</h2>
      <div className="cart-icon">
        <FaShoppingCart size={24} />
        <span className="cart-count">{totalItems}</span>
      </div>
    </nav>
  );
}
