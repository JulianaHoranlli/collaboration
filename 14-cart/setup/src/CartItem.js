import React from 'react';

export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} width="60" />

      <div className="item-info">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>

      <input
        type="number"
        min="0"
        value={item.amount}
        onChange={(e) =>
          updateQuantity(item.id, parseInt(e.target.value) || 0)
        }
      />

      <button className="remove-btn" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </div>
  );
}
