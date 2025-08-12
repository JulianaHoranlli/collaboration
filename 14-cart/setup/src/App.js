import React, { useState } from 'react';
import productsData from './data';
import Navbar from './Navbar';
import Cart from './Cart';

export default function App() {
  const [cart, setCart] = useState(productsData);

  const updateQuantity = (id, amount) => {
    if (amount === 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, amount } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <Navbar totalItems={totalItems} />
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  );
}
