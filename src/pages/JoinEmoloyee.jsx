import React, { useState } from "react";
import { BsEye, BsGoogle } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaRegEyeSlash } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const JoinEmoloyee = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-28 flex justify-center ">
      <div className=" p-9 shadow-lg sm:w-[642px] w-full  border rounded-xl">
        <h2 className="text-center lg:text-[40px] sm:text-3xl text-xl font-medium ">
          Register as new Employee
        </h2>
        <div className="md:px-14 mt-8 flex flex-col gap-4">
          <div className="flex md:flex-row flex-col gap-5">
            <input
              type="text"
              placeholder="Enter your name"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
            />
            <input
              type="date"
              placeholder="Enter your date of birth"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type an password"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
            />
            <span className="absolute top-3 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <BsEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <button className="border w-full h-10 rounded-lg font-semibold text-white bg-primary hover:bg-pink-500 duration-150 delay-150 sm:text-base text-sm">
            sing Up
          </button>

          <div className="flex sm:flex-row flex-col items-center gap-3">
            <div className="sm:w-4/12 w-full  border-b border-[#1F1F1F]"></div>
            <p className="text-sm font-semibold ">Also Sign up with</p>
            <div className="sm:w-4/12 w-full border-b border-[#1F1F1F]"></div>
          </div>
          <div>
            <button className=" border-[#1F1F1F] border w-full rounded-lg h-10 flex items-center justify-center gap-1.5 font-medium text-[#4C99D4]">
              <BsGoogle />
              Google
            </button>
          </div>
          <div>
            <button className=" border-[#1F1F1F] border w-full rounded-lg h-10 flex items-center justify-center gap-1 font-medium text-[#4C99D4]">
              <CgFacebook className="text-xl" />
              Facebook
            </button>
          </div>
          <div>
            <button className=" border-[#1F1F1F] border w-full rounded-lg h-10 flex items-center justify-center gap-1.5 font-medium text-[#4C99D4]">
              <TbBrandGithubFilled />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinEmoloyee;
