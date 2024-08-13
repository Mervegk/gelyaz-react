import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className=''>
        <li><Link to="/">Ana sayfa</Link></li>
        <li><Link to="users">Kullanıcılar</Link></li>
        <li><Link to="contact">İletişim</Link></li>
        <li onClick={() => navigate(-1)}>Geri</li>
      </ul>
    </nav>
  )
}