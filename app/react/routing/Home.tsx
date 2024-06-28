import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/react/routing/users');
    }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/react/routing/users" className="text-blue-700 cursor-pointer">Users</Link>

      <div>
        <button onClick={handleClick} className="p-2 cursor-pointer border border-gray-400">Users</button>
      </div>
      
    </div>
  );
}
