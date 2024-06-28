import { createBrowserRouter } from "react-router-dom";
import PageOne from "./Page-one";
import Home from "./Home";

const router = createBrowserRouter([
    {path: '/react/routing', element: <Home />},
    {path: '/react/routing/page-1', element: <PageOne />}
]);

export default router;