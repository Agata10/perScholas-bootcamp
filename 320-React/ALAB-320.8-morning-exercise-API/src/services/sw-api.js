const getAllStarships = async () => {
  try {
    const result = await fetch('https://swapi.dev/api/starships/');
    if (!result.ok) {
      throw new Error('No data fetched');
    }
    const starships = await result.json();
    return starships;
  } catch (err) {
    console.error(err.message);
  }
};

export default getAllStarships;
