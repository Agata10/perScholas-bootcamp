import { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
function App() {
  //array destructing
  const [count, setCount] = useState(0); /// returns => [state, setState]
  const [user, setUser] = useState({
    isLoggedIn: true,
    status: 'hidden',
    content: null,
    active: true,
  });
  // let state = useState(0);
  // let count = state[0];
  // let setCount = state[1]
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log('render');

  const changeStatus = () => {
    // const userCopy = { ...user };
    // userCopy.status = 'visible';
    setUser({
      ...user,
      status: user.status === 'visible' ? 'hidden' : 'visible',
    });
  };

  const [person, setPerson] = useState({
    firstName: "S'Chn T'Gai",
    lastName: 'Spock',
    email: 'spock@ussenterprise.space',
    address: {
      city: 'USS Enterprise',
      state: 'Where No Man Has Gone Before',
      zip: '9083147',
    },
  });

  const changeZip = () => {
    setPerson({
      ...person,
      address: {
        ...person.address,
        zip: '9083177',
      },
    });
  };
  return (
    <>
      Hello (from React)
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
      <h3>{user.status}</h3>
      <button onClick={changeStatus}>Change Status</button>
      <p>-------------------------------</p>
      <h3>{person.address.zip}</h3>
      <button onClick={changeZip}>Change zip</button>
      <p>-------------------------------</p>
      <Gallery />
    </>
  );
}

export default App;
