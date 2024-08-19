import React from 'react'

export default function Register() {
  return (
    <div>
      <h1 className='page-title'>Register</h1>
      <div className='register'>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
      </div>
    </div>
  )
}