import { useRef, useState } from 'react';
const Counter = () => {
  let ref = useRef(0);
  const [counter, setCounter] = useState(0);
  //   let ref = { current: 0 }; won't work, reset the value to 0 when each time is clicked
  function handleClick() {
    ref.current += 1;
    setCounter(counter + 1);
    alert('You clicked ' + ref.current + ' times!');
  }
  console.log('rendered Counter', counter);
  console.log('ref value is', ref.current);
  return <button onClick={handleClick}>Click me!</button>;
};

export default Counter;
