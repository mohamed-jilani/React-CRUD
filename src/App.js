
import './App.css';
import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import logo from './logo.svg';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    const newItem = { id: items.length + 1, name };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <AppHeader />
      <AddItemForm addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
