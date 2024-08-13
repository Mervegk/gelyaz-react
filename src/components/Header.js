import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul className=''>
        <li><Link to="/">Ana sayfa</Link></li>
        <li><Link to="users">Kullanıcılar</Link></li>
        <li><Link to="contact">İletişim</Link></li>
      </ul>
    </nav>
  )
}