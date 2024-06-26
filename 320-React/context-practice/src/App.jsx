import { useState, createContext } from 'react';
import './App.css';
import Parent from './components/Parent';

//step 1. create a context
export const FamilyContext = createContext();

function App() {
  const [style, setStyle] = useState({
    color: 'white',
    backgroundColor: 'blue',
  });

  function changeStyle() {
    let newStyle = {
      color: style.color === 'white' ? 'black' : 'white',
      backgroundColor: style.backgroundColor === 'blue' ? 'red' : 'blue',
    };
    setStyle(newStyle);
  }

  return (
    <div>
      <button onClick={changeStyle}>Change</button>
      <br />
      <br />
      <span style={style}>GrandParent (App)</span>
      <br />
      <br />
      {/* Step 2: Provide the context {and it's values} to nested components */}
      <FamilyContext.Provider value={style}>
        <Parent />
      </FamilyContext.Provider>
    </div>
  );
}

export default App;
