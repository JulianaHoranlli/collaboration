import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [messageKey, setMessageKey] = useState(0); // ndryshon sa here kemi njoftim 

  useEffect(() => {
    if (message === '') return;

    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [messageKey]);

  const showMessage = (text) => {
    setMessage(text);
    setMessageKey(prev => prev + 1);
  };

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    const newItem = {
      id: Date.now(),
      name: inputValue,
      bought: false
    };

    setItems([...items, newItem]);
    setInputValue('');
    showMessage(`U shtua: ${newItem.name}`);
  };

  const handleDelete = (id) => {
    const deletedItem = items.find(item => item.id === id);
    setItems(items.filter(item => item.id !== id));
    showMessage(`U fshi: ${deletedItem.name}`);
  };

  const toggleBought = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  };

  return (
    <>
      {visible && <div className="message">{message}</div>}

      <div className="container">
        <h1>Lista e Pazarit</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Shto produkt..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAdd}>Shto Produkt</button>
        </div>

        <ul className="shopping-list">
          {items.map(item => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.bought}
                  onChange={() => toggleBought(item.id)}
                />
                <span className={item.bought ? 'bought' : ''}>
                  {item.name}
                </span>
              </label>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Fshi
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
