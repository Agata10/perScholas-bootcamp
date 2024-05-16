import { useReducer, useState } from 'react';

import './App.css';

function App() {
  //state is the current state(before the changes)
  //action is the infromation from dispatch
  function reducer(state, action) {
    console.log('state:', state);
    console.log('dispatch:', action);
    return state;
  }
  //dispatch -> gets info from dispatch and returns new state
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch('information')}>Test</button>
    </>
  );
}

export default App;
