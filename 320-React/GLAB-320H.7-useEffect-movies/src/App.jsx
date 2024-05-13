import { useState, useEffect } from 'react';

import './App.css';

// Import our components
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  const [movie, setMovie] = useState(null);
  //api_key
  const apikey = '310326df';

  //getrandommovie
  const randomMovie = () => {
    const movies = [
      'The Shawshank Redemption',
      'The Godfather',
      'The Dark Knight',
      'Pulp Fiction',
      'Fight Club',
    ];
    const indexRandom = Math.floor(Math.random() * movies.length);
    return movies[indexRandom];
  };
  //catch movies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apikey}&t=${searchTerm}`
      );
      //parse json response into js object
      const data = await response.json();
      //set movie
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie(randomMovie());
  }, []);
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
