import { Outlet } from "react-router-dom";
import Navber from "../components/shared/navber/Navber";

const Main = () => {
  return (
    <div className="xl:w-8/12 lg:w-10/12 mx-auto lg:px-0 px-5">
      <Navber />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
