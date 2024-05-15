import Card from './components/Card';
import { useEffect, useState } from 'react';
import getAllStarships from './services/sw-api';
const Home = () => {
  const [stars, setStars] = useState(null);
  const fetchStarships = async () => {
    try {
      const starships = await getAllStarships();
      setStars(starships.results);
      // console.log(starships);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchStarships();
  }, []);

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '20px',
  };
  let index = 1;
  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>

      <div style={style}>
        {!stars && <div>Loading data...</div>}
        {stars &&
          stars.map((s) => {
            index++;
            return <Card key={index} star={s} index={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
