import React, { useState } from 'react'

export default function Form() {

  const [form, setForm] = useState({ name: "", surname: "", gender: "Kadın" })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <div>
        İsim
        <input type="text" name='name' placeholder='isim' value={form.name} onChange={handleChange} />
      </div>
      <div>
        Soyisim
        <input type="text" name='surname' placeholder='soyisim' value={form.surname} onChange={handleChange} />
      </div>
      <div>
        <select name="gender" id="" value={form.gender} onChange={handleChange}>
          <option value="Kadın">Kadın</option>
          <option value="Erkek">Erkek</option>
        </select>
      </div>
      <div>
        <hr />
        <p>İsim: {form.name}</p>
        <p>Soyisim: {form.surname}</p>
        <p>Cinsiyet: {form.gender}</p>
      </div>
    </div>
  )
}
