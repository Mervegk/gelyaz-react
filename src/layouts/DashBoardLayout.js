import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function DashBoardLayout() {
  return (
    <div>
      <Header />
      <div id='content'>
        <Outlet />
      </div>
    </div>
  )
}
