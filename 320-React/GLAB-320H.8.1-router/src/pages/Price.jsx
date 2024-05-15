import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Price = () => {
  const API_KEY = 'E2753C41-D71F-41F1-9F36-BA52FE9117E5';
  const params = useParams();
  const symbol = params.symbol;
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${API_KEY}`;
  const [coin, setCoin] = useState(null);

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return coin && coin.rate ? loaded() : loading();
};

export default Price;
