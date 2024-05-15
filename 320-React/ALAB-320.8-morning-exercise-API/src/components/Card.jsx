const Card = ({ star }) => {
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
  return <div style={style}>{star.name}</div>;
};

export default Card;
