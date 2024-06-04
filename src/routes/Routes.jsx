import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import JoinEmoloyee from "../pages/JoinEmoloyee";
import JoinManager from "../pages/JoinManager";
import Home from "../components/home/Home";
import Login from "../pages/Login";
import Error from "../components/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/joinemployee",
        element: <JoinEmoloyee />,
      },
      {
        path: "/joinmanager",
        element: <JoinManager />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
