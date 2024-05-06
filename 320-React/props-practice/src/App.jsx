import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Welcome from './components/Welcome';
import Image from './components/Image';

//props drilling
const Parent = (props) => <Child cheese="gouda" />;

const Child = (props) => <GrandChild data={props.cheese} />;

const GrandChild = (props) => <h1>{props.data}</h1>;

function App() {
  return (
    <>
      <div>
        <Image src={viteLogo} alt="Vite logo" href="https://vitejs.dev" />
        <Image src={reactLogo} alt="React logo" href="https://react.dev" />
        <Parent />
      </div>
      <h1>Vite + React</h1>
      <Welcome firstName="Agata" lastName="Det." style={{ color: 'green' }} />
      <Welcome
        firstName="NoName"
        lastName="NoLastName"
        style={{ color: 'red' }}
      />
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
