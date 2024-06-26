import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index === sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
      //   setIndex((index) => index + 1);
      //   setIndex((index) => index + 1);
      //will work
    }
  }

  function handlePrev() {
    if (index < 1) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
