import React from 'react'
import '../pages/Auth/auth.css'
import { Link, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='auth-container'>
      <div className='auth-menu'>
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt Ol</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}
