import { createBrowserRouter } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import UserDetail from './UserDetail';
import Navbar from './Navbar';

const router = createBrowserRouter([
  {
    path: '/react/routing/',
    element: <Navbar />,
    children: [
      { path: '', element: <Home /> },
      { path: 'users', element: <Users /> },
      { path: 'users/:id', element: <UserDetail /> },
    ],
  },
]);

export default router;
