import React, { useState, useEffect } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("interval");
      setCounter(prev => prev + 1)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prev => prev + amount)}>Arttır</button>
      <hr />
      <p>Arttırma: +{amount} </p>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(5)}>+5</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  )
}

export default Counter;