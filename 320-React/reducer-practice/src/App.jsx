import { useReducer, useState } from 'react';

import './App.css';

function App() {
  //state is the current state(before the changes)
  //action is the infromation from dispatch
  function reducer(state, action) {
    switch (action.type) {
      case 'inc':
        return ++state;
      case 'dec':
        return state - 1;
      case 'reset':
        return 0;
      default:
        return state;
    }
  }
  //dispatch -> gets info from dispatch and returns new state
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}

export default App;
