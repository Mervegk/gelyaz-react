import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);

        axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
          .then(res => setPosts(res.data))
      })
      .finally(() => setLoading(false))
  }, []) */

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

    setLoading(false)
    setUsers(users);
    setPosts(posts);
  }

  return (
    <div>
      <h1>Users</h1>
      {
        loading && <h4>Yükleniyor...</h4>
      }
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          posts.map(post => <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>)
        }
      </ul>
    </div>
  )
}