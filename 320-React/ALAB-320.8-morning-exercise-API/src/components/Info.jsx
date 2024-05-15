import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  const params = useParams();
  const id = params.id;
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const result = await fetch(`https://swapi.dev/api/starships/${id}`);
        if (!result.ok) {
          throw new Error('No data fetched');
        }
        const starships = await result.json();
        console.log(starships);
        setShip(starships);
        return starships;
      } catch (err) {
        setShip(0);
        console.error(err.message);
      }
    };
    getInfo();

    return () => {
      setShip(null);
    };
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>Model: {ship.model}</h1>
        <h3>Crew: {ship.crew}</h3>
        <h5>Length: {ship.length}</h5>
      </div>
    );
  };

  const loading = () => {
    if (ship == 0) {
      return <div>No info to fetch</div>;
    }
    return <div>Loading...</div>;
  };
  return ship ? loaded() : loading();
};

export default Info;
