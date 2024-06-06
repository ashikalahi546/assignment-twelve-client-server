import React from "react";
import { BsGoogle } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { TbBrandGithubFilled } from "react-icons/tb";

const JoinEmoloyee = () => {
  return (
    <div className="mt-28 flex justify-center ">
      <div className=" p-9 shadow-lg sm:w-[642px] w-full  border rounded-xl">
        <h2 className="text-center lg:text-[40px] sm:text-xl text-2xl font-medium ">
          Register as new Employee
        </h2>
        <div className="px-14 mt-8 flex flex-col gap-4">
          <div className="flex gap-5">
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

          <input
            type="password"
            placeholder="Type an password"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
          <button className="border w-full h-10 rounded-lg font-semibold text-white bg-primary hover:bg-pink-500 duration-150 delay-150 sm:text-base text-sm">
            sing Up
          </button>

          <div className="flex items-center gap-3">
            <div className="w-4/12 border-b border-[#1F1F1F]"></div>
            <p className="text-sm font-semibold">Also Sign up with</p>
            <div className="w-4/12 border-b border-[#1F1F1F]"></div>
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
