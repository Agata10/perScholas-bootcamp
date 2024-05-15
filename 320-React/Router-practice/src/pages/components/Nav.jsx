import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <div>Main</div>
      </Link>
      <Link to="/profile">
        <div>Profile</div>
      </Link>
    </nav>
  );
};

export default Nav;
