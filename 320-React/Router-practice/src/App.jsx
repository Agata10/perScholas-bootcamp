import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
