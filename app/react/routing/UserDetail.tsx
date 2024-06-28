import { Link, useParams } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Detail for {id}</h1>

      <Link to="/react/routing/users" className="text-blue-700 cursor-pointer">
        Users
      </Link>
    </div>
  );
}
