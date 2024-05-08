import { useState } from 'react';
import './App.css';

function App() {
  //array destructing
  const [count, setCount] = useState(0); /// returns => [state, setState]

  // let state = useState(0);
  // let count = state[0];
  // let setCount = state[1]
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log('render');
  return (
    <>
      Hello (from React)
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default App;
