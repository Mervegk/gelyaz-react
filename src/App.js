//import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Dashboard/Home'
import Users from './pages/Dashboard/Users';
import Contact from './pages/Contact';
import UserDetail from './components/UserDetail';
import Login from './pages/Auth/Login';
import DashBoardLayout from './layouts/DashBoardLayout';
import AuthLayout from './layouts/AuthLayout';
import Register from './pages/Auth/Register';
import NotFound from './pages/NotFound';

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
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;