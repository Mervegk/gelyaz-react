//import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Users from './pages/Users';
import Contact from './pages/Contact';
import UserDetail from './components/UserDetail';
import Login from './pages/Login';
import DashBoardLayout from './layouts/DashBoardLayout';
import AuthLayout from './layouts/AuthLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoardLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetail />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;