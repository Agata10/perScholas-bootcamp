import Home from './Home';
import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Info from './components/Info';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
