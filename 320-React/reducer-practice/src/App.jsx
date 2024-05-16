import { useReducer, useState } from 'react';

import './App.css';

function App() {
  //state is the current state(before the changes)
  //action is the infromation from dispatch
  function reducer(state, action) {
    if (action === 'inc') {
      state++;
    } else if (action === 'dec') {
      state--;
    } else {
      state = 0;
    }

    return state;
  }
  //dispatch -> gets info from dispatch and returns new state
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>Counter: {state}</div>
      <button onClick={() => dispatch('inc')}>Increment</button>
      <button onClick={() => dispatch('dec')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  );
}

export default App;
