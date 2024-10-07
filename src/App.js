import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import DeleteButton from './components/DeleteButton';

function App() {
  // Simuler une liste d'éléments dans le state local
  const [items, setItems] = useState([
    { id: 1, name: 'Élément 1' },
    { id: 2, name: 'Élément 2' }
  ]);

  // Ajouter un élément
  const addItem = (name) => {
    const newItem = { id: items.length + 1, name };
    setItems([...items, newItem]);
  };

  // Supprimer un élément
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <AppHeader />
      <AddItemForm addItem={addItem} />
      <ItemList items={items} />
      {items.map(item => (
        <div key={item.id}>
          <DeleteButton itemId={item.id} deleteItem={deleteItem} />
        </div>
      ))}
    </div>
  );
}

export default App;
