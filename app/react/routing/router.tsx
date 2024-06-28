import { createBrowserRouter } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import UserDetail from './UserDetail';
import Navbar from './Navbar';

const router = createBrowserRouter([
  {
    path: '/react/routing',
    element: <Navbar />,
    children: [
      { path: '/react/routing', element: <Home /> },
      { path: '/react/routing/users', element: <Users /> },
      { path: '/react/routing/users/:id', element: <UserDetail /> },
    ],
  },
]);

export default router;
