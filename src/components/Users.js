import React, { useEffect, useState } from 'react'

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
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