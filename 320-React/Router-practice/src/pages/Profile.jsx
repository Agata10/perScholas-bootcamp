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
        const result = await fetch(`https://exapmle-api.com/${id}`);
        const data = await result.json();
        setUser(data);
      } catch (err) {
        console.log(err);
        setUser('No user to catch..');
      }
    };

    setTimeout(getUserData, 1000);
  }, [id]);
  const loaded = () => {
    if (typeof user === 'string') {
      return <div>{user}</div>;
    } else {
      return (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
        </div>
      );
    }
  };
  const loading = () => {
    return <div>Loading....</div>;
  };
  return user ? loaded() : loading();
};

export default Profile;
