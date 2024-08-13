//import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Users from './pages/Users';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;