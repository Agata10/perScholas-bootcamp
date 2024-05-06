import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Welcome from './components/Welcome';
import Image from './components/Image';

//props drilling
const Parent = (props) => <Child cheese="gouda" />;

const Child = (props) => <GrandChild data={props.cheese} />;

const GrandChild = (props) => <h1>{props.data}</h1>;

//props.children
const Container = (props) => {
  return (
    <div>
      <h1>This is hello from container</h1>
      {props.children}
    </div>
  );
};

function App() {
  //the props object
  const reactImgProps = {
    src: reactLogo,
    alt: 'React logo',
    href: 'https://react.dev',
  };

  let arr = [1, 2, 3, 4, 5];

  arr.map((num) => num * 2);
  // An array of dogs.
  const dogs = [
    { name: 'Sparky', age: 5 },
    { name: 'Spot', age: 5 },
    { name: 'Ralph', age: 5 },
    { name: 'Fido', age: 5 },
  ];

  // console.log(Object.keys(dogs));
  // console.log(Object.values(dogs));
  const dogElements = dogs.map((dog) => {
    return (
      <div key={dog.name}>
        {dog.name}: {dog.age}
      </div>
    );
  });
  return (
    <>
      {dogElements}
      <Container>
        <Image src={viteLogo} alt="Vite logo" href="https://vitejs.dev" />
        {/**spread the object into key value pairs */}
        <Image {...reactImgProps} />
      </Container>

      <Parent />

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
