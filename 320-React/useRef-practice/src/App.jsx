import { useRef } from 'react';
import Counter from './components/Counter';

import './App.css';
import StopWatch from './components/StopWatch';
import CatFriends from './components/CatFriends';

function App() {
  const ref = useRef(0);
  ref.current = 'test';
  console.log('rendered app');
  return (
    <>
      {/* <Counter /> */}
      {/* <StopWatch /> */}
      <CatFriends />
    </>
  );
}

export default App;
