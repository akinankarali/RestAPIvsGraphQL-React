import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestfulComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>REST API Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestfulComponent;
