import React, { useState, useMemo } from 'react'
import UserUseMemo from './UserUseMemo';

export default function Counter2() {
  console.log('Counter component re-render')
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Merve');

  const userData = useMemo(() => {
    return {
      id: 1,
      name
    }
  }, [name])

  return (
    <div>
      <UserUseMemo data={userData} />
      <button onClick={() => setName(name === 'Merve' ? 'Güler' : 'Merve')}>Ad Değiştir</button>
      <hr />
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)} >Arttır</button>
    </div>
  )
}
