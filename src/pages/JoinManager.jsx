import React from "react";

const JoinManager = () => {
  return (
    <div className="mt-28 flex justify-center ">
      <div className=" p-9 shadow-lg sm:w-[565px] w-full items-center border rounded-xl">
        <h2 className="text-center lg:text-[40px] sm:text-3xl text-2xl font-medium ">
          Payment Details
        </h2>

        <div className="md:px-10 flex flex-col gap-5 mt-7">
          <h3 className="text-lg font-semibold">Selected package </h3>
          <p className="text-base font-medium pb-5">
            Gold - $8.00 / (10 Employee)
          </p>
          <input
            type="text"
            name="card"
            placeholder="Name on the card"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full "
          />
          <input
            type="number"
            name="number"
            placeholder="0000-0000-0000-0000"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full "
          />

          <button className="border w-full h-10 rounded-lg font-semibold text-white bg-primary hover:bg-pink-500 duration-150 delay-150 sm:text-base text-sm">
            Pay
          </button>
          <button className="border w-full h-10 rounded-lg font-semibold text-primary hover:text-white hover:bg-primary duration-150 delay-150 border-primary sm:text-base text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinManager;
