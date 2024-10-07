function DeleteButton({ itemId, deleteItem }) {
    return (
      <button onClick={() => deleteItem(itemId)}>Supprimer</button>
    );
  }
  
  export default DeleteButton;
  