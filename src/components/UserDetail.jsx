import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  return (
    <div>
      <h1>User Detail</h1>
      <div>
        {
          user && <pre>{JSON.stringify(user, null, 2)}</pre>
        }
        {
          user && <p>{user.company.name}</p>
        }
      </div>
    </div>
  )
}
