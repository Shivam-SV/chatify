import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />
  }
]);

export default router;
