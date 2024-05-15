import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return;
    const getUserData = async () => {
      const result = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await result.json();
      setUser(data.name);
    };

    getUserData();
  }, []);
  return <div>{user ? user : 'Profile'}</div>;
};

export default Profile;
