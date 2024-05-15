import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Nav from './pages/components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
