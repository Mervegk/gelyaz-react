import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {
        users.map(user =>
          <div key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </div>
        )
      }
    </div>
  )
}
