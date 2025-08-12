import React, { useState } from 'react';
import menu from './data';
import MenuItem from './MenuItem';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu);
    } else {
      const newItems = menu.filter((item) => item.category === category);
      setItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        
        <Categories categories={categories} filterItems={filterItems} />
        

        <div className="menu-items">
          {items.map((menuItem) => (
            <MenuItem key={menuItem.id} {...menuItem} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;