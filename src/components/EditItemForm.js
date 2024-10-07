import React, { useState } from 'react';

function EditItemForm({ item, updateItem }) {
  const [itemName, setItemName] = useState(item.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item.id, itemName);  // Mettre à jour l'élément
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">Modifier</button>
    </form>
  );
}

export default EditItemForm;
