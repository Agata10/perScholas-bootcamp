import { useState, useEffect } from 'react';

import './App.css';

// Import our components
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  const [movie, setMovie] = useState(null);
  //api_key
  const apikey = '310326df';
  //catch movies
  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?${apikey}=YOURKEY&t=${searchTerm}`
    );
    //parse json response into js object
    const data = await response.json();
    //set movie
    setMovie(data);
  };
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}
