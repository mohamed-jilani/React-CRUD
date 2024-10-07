import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);  // [] signifie que ça s'exécute une seule fois après le premier rendu.

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
