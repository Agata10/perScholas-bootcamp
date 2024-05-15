import getAllStarships from './services/sw-api';
import './App.css';
import { useEffect } from 'react';

function App() {
  const fetchStarships = async () => {
    try {
      const starships = await getAllStarships();
      console.log(starships);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchStarships();
  }, []);

  return <></>;
}

export default App;
