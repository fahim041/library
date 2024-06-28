import { createBrowserRouter } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";

const router = createBrowserRouter([
    {path: '/react/routing', element: <Home />},
    {path: '/react/routing/users', element: <Users />}
]);

export default router;