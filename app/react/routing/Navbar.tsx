'use client';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="mb-4">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold">
              <Link to={'/react/routing'} className="text-white">
                React Routing
              </Link>
            </div>
            <div>
              <Link to="/react/routing/users" className="text-white">
                Users
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
