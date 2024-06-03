import { NavLink } from "react-router-dom";
import logo from "/image/logo.png";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 1, name: "Join as Employee", path: "/joinemployee" },
    { id: 1, name: "Join as HR Manager", path: "/Joinmanager" },
  ];
  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="md:w-auto w-8" src={logo} alt="" />
          <h3 className="md:text-xl text-lg font-medium text-primary ">
            Open<span className="text-[#4C99D4]">Sans</span>
          </h3>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-4 top-4 text-2xl cursor-pointer"
        >
          {open ? <RxCross2 /> : <MdMenuOpen />}
        </div>

        <ul
          className={`flex md:gap-7 gap-2 md:shadow-[0px] rounded-md shadow-2xl p-5 md:text-base text-sm text-[#1F1F1F] font-medium md:static absolute right-2 md:flex-row flex-col ${
            open ? "top-11 duration-300 delay-500" : "-top-32"
          }`}
        >
          {routes.map((route) => (
            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              route={route}
              key={route.id}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
        <div>
          <button className="bg-primary px-5 py-2 text-white  md:text-sm text-xs  font-medium rounded-lg hover:bg-pink-500 duration-100 delay-150">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
