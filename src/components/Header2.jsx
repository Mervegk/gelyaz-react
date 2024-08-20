import React, { memo } from 'react'

function Header2({ increment }) {
  console.log('Header component re-render')
  return (
    <div>
      <h4>Header</h4>
      <button onClick={increment}>Arttır</button>
    </div>
  )
}
export default memo(Header2)