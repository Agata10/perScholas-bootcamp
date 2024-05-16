import { useReducer, useState } from 'react';

import './App.css';

function App() {
  //state is the current state(before the changes)
  //action is the infromation from dispatch
  function reducer(state, action) {
    switch (action.type) {
      case 'inc':
        return state + action.payload;
      case 'dec':
        return state - action.payload;
      case 'reset':
        return 0;
      case 'setNumber':
        return action.payload;
      default:
        return state;
    }
  }
  //dispatch -> gets info from dispatch and returns new state
  const [count, dispatch] = useReducer(reducer, 0);
  const [num, setNum] = useState(1);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch({ type: 'inc', payload: num })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'dec', payload: num })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'setNumber', payload: num })}>
        Set Number
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
    </>
  );
}

export default App;
