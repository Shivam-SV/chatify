import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Home from "../pages/Home/index.jsx";
import Register from "../pages/auth/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Home />
  }
]);

export default router;
