import { useEffect, useState } from "react";
import SelectData from "./SelectData";
import { FaRegEyeSlash } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

const JoinManager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [allData, setData] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-28">
      <div className=" flex justify-center ">
        <div className=" p-9 shadow-lg sm:w-[599px] w-full  border rounded-xl">
          <h2 className="text-center lg:text-[40px] sm:text-3xl text-xl font-medium ">
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Type an password"
                className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
              />
              <span
                className="cursor-pointer absolute right-4 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="md:text-3xl text-xl font-bold text-center mt-8">
          Select a package
        </h2>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 my-10">
          {allData.map((data) => (
            <SelectData data={data} key={data.id}></SelectData>
          ))}
        </div>

        <div className="w-96 mx-auto mb-8">
          <button className="border w-full  h-10 rounded-lg font-semibold text-white bg-primary hover:bg-pink-500 duration-150 delay-150 sm:text-base text-sm">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinManager;
// <div className="mt-28 flex justify-center ">
//   <div className=" p-9 shadow-lg sm:w-[565px] w-full items-center border rounded-xl">
//     <h2 className="text-center lg:text-[40px] sm:text-3xl text-2xl font-medium ">
//       Payment Details
//     </h2>

//     <div className="md:px-10 flex flex-col gap-5 mt-7">
//       <h3 className="text-lg font-semibold">Selected package </h3>
//       <p className="text-base font-medium pb-5">
//         Gold - $8.00 / (10 Employee)
//       </p>
//       <input
//         type="text"
//         name="card"
//         placeholder="Name on the card"
//         className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full "
//       />
//       <input
//         type="number"
//         name="number"
//         placeholder="0000-0000-0000-0000"
//         className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full "
//       />

//       <button className="border w-full h-10 rounded-lg font-semibold text-white bg-primary hover:bg-pink-500 duration-150 delay-150 sm:text-base text-sm">
//         Pay
//       </button>
//       <button className="border w-full h-10 rounded-lg font-semibold text-primary hover:text-white hover:bg-primary duration-150 delay-150 border-primary sm:text-base text-sm">
//         Cancel
//       </button>
//     </div>
//   </div>
// </div>
