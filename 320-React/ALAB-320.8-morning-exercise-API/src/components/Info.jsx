import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  const params = useParams();
  const id = params.id;
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const result = await fetch('https://swapi.dev/api/starships/' + id);
        if (!result.ok) {
          throw new Error('No data fetched');
        }
        const starships = await result.json();
        console.log(starships);
        setShip(starships);
        return starships;
      } catch (err) {
        console.error(err.message);
      }
    };
    getInfo();
  }, []);
  return <div>Info</div>;
};

export default Info;
