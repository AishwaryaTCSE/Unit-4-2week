import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Failed to fetch:', err));

    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h3 style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? '✅ You are online' : '🔴 No internet connection'}
      </h3>

      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
