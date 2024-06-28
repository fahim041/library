import { Link } from "react-router-dom";

export default function PageOne() {
  return (
    <div>
      <h1>Page One</h1>
      <Link to="/react/routing/" className="text-blue-700 cursor-pointer">Home</Link>
    </div>
  );
}
