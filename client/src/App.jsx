import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { create } from 'zustand'
import useUserStore from './useUserStore';
// Import your components
import Home from './routes/Home';
import Login from './routes/Login';
import Profile from './routes/Profile'
import Favorites from './routes/Favorites'
// import About from './About';
// import NotFound from './routes/notfound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
