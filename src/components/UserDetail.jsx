import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  useEffect(() => {
    if (!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }
  }, [id, user])

  return (
    <div>
      <h1>User Detail</h1>
      <div>
        {
          user && <pre>{JSON.stringify(user, null, 2)}</pre>
        }
        <Link to={`/users/${Number(id) + 1}`} >Sonraki Kullanıcı</Link>
      </div>
    </div>
  )
}
