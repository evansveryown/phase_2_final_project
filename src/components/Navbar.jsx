import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/add">Add Idea</Link> | 
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}
