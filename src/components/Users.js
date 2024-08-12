import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {
        loading && <h4>Yükleniyor</h4>
      }
      <ul>
        {
          users.map(i => <li key={i.id}>{i.name}</li>)
        }
      </ul>
    </div>
  )
}