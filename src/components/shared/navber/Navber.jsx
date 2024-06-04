import { Link, NavLink } from "react-router-dom";
import logo from "/image/logo.png";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Join as Employee", path: "/joinemployee" },
    { id: 3, name: "Join as HR Manager", path: "/joinmanager" },
  ];
  return (
    <div className="fixed w-full  bg-white z-50 xl:w-8/12 lg:w-10/12 mx-auto lg:px-0 px-5 top-0 py-2">
      <div className=" flex md:flex-row flex-col md:gap-0 gap-2 md:items-center justify-between ">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="md:w-auto w-8" src={logo} alt="" />
            <h3 className="md:text-xl text-lg font-medium text-primary ">
              Open<span className="text-[#4C99D4]">Sans</span>
            </h3>
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-10 top-4 text-2xl cursor-pointer "
        >
          {open ? <RxCross2 /> : <MdMenuOpen />}
        </div>

        <div className="flex md:flex-row flex-col justify-between md:items-center items-end ">
          <ul
            className={`flex md:gap-7 gap-2 md:shadow-[0px] right-10 rounded-md bg-white shadow-2xl p-5 md:text-base z-40 text-sm text-[#1F1F1F] font-medium md:static absolute  md:flex-row flex-col ${
              open ? "top-11 duration-300 delay-500" : "-top-32"
            }`}
          >
            {routes.map((route, idx) => (
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                route={route}
                key={idx}
                to={route.path}
              >
                {route.name}
              </NavLink>
            ))}
          </ul>
          <Link to="/login">
            <button className="bg-primary px-5 py-2 text-white  md:text-sm text-xs  font-medium rounded-lg hover:bg-pink-500 duration-100 delay-150">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
