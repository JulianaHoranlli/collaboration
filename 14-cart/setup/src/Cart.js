import React from 'react';
import CartItem from './CartItem';

export default function Cart({ cart, updateQuantity, clearCart, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Shporta është bosh</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
