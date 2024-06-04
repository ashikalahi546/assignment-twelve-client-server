import React from "react";

const JoinEmoloyee = () => {
  return (
    <div className="mt-28 flex justify-center ">
      <div className=" p-9 shadow-lg sm:w-[599px] w-full items-center border rounded-xl">
        <h2 className="text-center lg:text-[40px] sm:text-3xl text-2xl font-medium ">
          Register as HR Manager
        </h2>
        <div className="md:px-10 flex flex-col gap-3">
          <div className="mt-7  flex md:flex-row flex-col gap-5">
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full "
            />
            <input
              type="date"
              name="date"
              placeholder="Enter your date of birth"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
            />
          </div>
          <input
            type="Enter your company name"
            name="company"
            placeholder="Enter your company name"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
          <input
            type="photo"
            name="photo"
            placeholder="Upload your company logo"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Type an password"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinEmoloyee;
