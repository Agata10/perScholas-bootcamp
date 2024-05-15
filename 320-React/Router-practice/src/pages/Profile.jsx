import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return;
    const getUserData = async () => {
      try {
        const result = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await result.json();
        setUser(data.name);
      } catch (err) {
        console.log(err);
        setUser('No user to catch..');
      }
    };

    getUserData();
  }, [id]);
  const loaded = () => {
    return <div>{user}</div>;
  };
  const loading = () => {
    return <div>Loading....</div>;
  };
  return <div>{user ? loaded() : loading()}</div>;
};

export default Profile;
