import React, { useState, useMemo, useCallback } from 'react'
import UserUseMemo from './UserUseMemo';
import Header2 from './Header2';

export default function Counter2() {
  console.log('Counter component re-render')
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Merve');
  const [amount, setAmount] = useState(1);

  const userData = useMemo(() => {
    return {
      id: 1,
      name
    }
  }, [name])

  const increment = useCallback(() => {
    setCounter(prev => prev + amount)
  }, [amount])


  return (
    <div>
      <Header2 increment={increment} />
      <hr />
      <h2>{counter}</h2>
      <button onClick={increment} >Arttır</button>
      <hr />
      <p>Arttırma: +{amount} </p>
      <button onClick={() => setAmount(amount + 1)}>+1</button>
      <button onClick={() => setAmount(amount + 3)}>+3</button>
      <button onClick={() => setAmount(amount + 5)}>+5</button>
    </div>
  )
}
