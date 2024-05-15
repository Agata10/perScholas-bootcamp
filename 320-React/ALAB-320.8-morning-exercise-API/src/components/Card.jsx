import { Link } from 'react-router-dom';
const Card = ({ star, index }) => {
  const style = {
    width: '300px',
    height: '100px',
    backgroundColor: 'purple',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3rem',
  };
  return (
    <Link to={`/info/${index}`}>
      <div style={style}>{star.name}</div>
    </Link>
  );
};

export default Card;
