import { useRef } from 'react';
import Counter from './components/Counter';

import './App.css';

function App() {
  const ref = useRef(0);
  ref.current = 'test';
  console.log('rendered app');
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
