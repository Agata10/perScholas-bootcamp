import { useRef, useEffect, useState } from 'react';
import Counter from './components/Counter';

import './App.css';
import StopWatch from './components/StopWatch';
import CatFriends from './components/CatFriends';
import Form from './components/Form';

function App() {
  const ref = useRef(0);
  const [show,setShow] = useState(false)
  ref.current = 'test';
  console.log('rendered app');

  return (
    <>
    <button onClick={() => setShow(!show)}>{show ? "hide the form" : "show form"}</button>
    {show && <Form/>}
      {/* <Counter /> */}
      {/* <StopWatch /> */}
      <CatFriends />
    </>
  );
}

export default App;
