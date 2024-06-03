import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import JoinEmoloyee from "../pages/JoinEmoloyee";
import JoinManager from "../pages/JoinManager";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/joinemployee',
        element:<JoinEmoloyee/>
      },
      {
        path:'/Joinmanager',
        element:<JoinManager/>
      }
    ]
  },
]);
