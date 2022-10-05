import React from "react";

function SignUp() {
  return (
    <section className=" ">
      <div className="flex justify-center item-center px-6 py-12 flex-wrap  container mx-auto w-8/12 md:flex-column">
        <div className=" w-1/2">
          <img src={fine} alt="image" className="" />
        </div>
        <div
          className="w-1/2   flex-wrap bg-white 
        "
        >
          <div className=" py-8 ">
            <h1 className="text-3xl text-center  font-semi-bold py-6  ">
              welcome back!
            </h1>
            <form className="px-12 ">
              <input
                type="text"
                className="mb-8 px-4 py-2 text-sm text-gray-700 bg-white border-gray-300  transition ease-in-out w-full"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email address"
              />
              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Your password"
                  className="w-full px-4 py-2 text-sm text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                />

                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-3 text-xl text-black cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-3 text-xl text-black cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>

              <button
                className="w-full bg-green text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-800 mb-4"
                type="submit"
              >
                LOGIN
              </button>
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg px-2">
                <p className="text-sm">
                  <Link
                    to="/sign-up"
                    className="text-green hover:text-blue-800 transition duration-200 ease-in-out "
                  >
                    Create an account
                  </Link>
                </p>
                <p className="text-sm">Forgot Password</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
