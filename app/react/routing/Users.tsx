import { Link } from 'react-router-dom';

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <div>
        <Link to="/react/routing/users/1" className="text-blue-700 cursor-pointer">User-1</Link>
      </div>
      <div>
        <Link to="/react/routing/users/2" className="text-blue-700 cursor-pointer">User-2</Link>
      </div>

      <Link to="/react/routing/" className="text-blue-700 cursor-pointer">
        Home
      </Link>
    </div>
  );
}
