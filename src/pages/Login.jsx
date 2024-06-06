const Login = () => {
  return (
    <div className="mt-28 flex justify-center ">
      <div className="p-8 shadow-lg sm:w-[474px] w-full items-center border rounded-xl">
        <div className="flex  sm:flex-row flex-col items-center sm:gap-5 gap-2 justify-center">
          <button className="border w-[150px] h-10 rounded-lg font-semibold text-primary border-primary sm:text-base text-sm">
            HR
          </button>
          <h4 className="font-medium text-sm">OR</h4>
          <button className="border w-[150px] h-10 rounded-lg font-semibold text-white bg-primary sm:text-base text-sm">
            EMPLOYEE
          </button>
        </div>
        <h2 className="text-center lg:text-[40px] sm:text-3xl text-xl font-medium my-8">
          Login in to Continue
        </h2>
        <div className="mt-5 px-5">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full mb-5"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full"
          />
          <p className="text-end mt-1 text-sm text-[#1F1F1F80]">
            forgotten password?
          </p>
          <button className="border mt-4 w-full h-10 rounded-lg font-medium text-white bg-primary text-sm">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
