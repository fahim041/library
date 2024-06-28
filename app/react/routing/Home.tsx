import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/react/routing/page-1');
    }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/react/routing/page-1" className="text-blue-700 cursor-pointer">Page One</Link>

      <div>
        <button onClick={handleClick} className="p-2 cursor-pointer border border-gray-400">Page One</button>
      </div>
      
    </div>
  );
}
