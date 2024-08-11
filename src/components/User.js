import React, { useState } from 'react'

export default function User() {

  const [user, setUser] = useState({ name: 'Merve', surname: 'Keleş' });
  return (
    <div>

      {user.name} {user.surname}
      <div>
        <button onClick={() => setUser({ ...user, name: 'Güler' })}>Adı Değiştir</button>
        <button onClick={() => setUser({ ...user, surname: 'Duman' })}>Soyadı Değiştir</button>
      </div>
    </div>
  )
}
