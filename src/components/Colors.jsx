import React, { useState } from 'react'

export default function Colors() {

  const [colors, setColors] = useState(['kırmızı', 'yeşil', 'mavi']);

  const handleClick = () => {
    setColors([...colors, 'gri'])
  }

  return (
    <div>

      {
        colors.map((color, index) => <div key={index}>{color}</div>)
      }
      <button onClick={handleClick}>Ekle</button>
    </div>
  )
}
