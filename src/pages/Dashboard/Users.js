import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {
        users.map(user =>
          <div key={user.id}>
            <Link to={`${user.id}`} state={user}>{user.name}</Link>
          </div>
        )
      }
    </div>
  )
}
