import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState("Murtaza");
  const [surname, setSurname] = useState("Yeter");
  const [gender, setGender] = useState("Kadın");
  return (
    <div>
      <div>
        İsim
        <input type="text" placeholder='isim' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Soyisim
        <input type="text" placeholder='soyisim' value={surname} onChange={(e) => setSurname(e.target.value)} />
      </div>
      <div>
        <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Kadın">Kadın</option>
          <option value="Erkek">Erkek</option>
        </select>
      </div>
      <div>
        <hr />
        <p>İsim: {name}</p>
        <p>Soyisim: {surname}</p>
        <p>Cinsiyet: {gender}</p>
      </div>
    </div>
  )
}
