import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName('');  // Réinitialiser le champ après soumission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Nom de l'élément"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
