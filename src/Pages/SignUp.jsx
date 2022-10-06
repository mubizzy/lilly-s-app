import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import fine from "../images/fine.png";
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <section className=" ">
      <div className="flex justify-center item-center px-6 py-12 flex-wrap  container mx-auto w-8/12 ">
        <div className=" w-1/2 bg-red">
          <img src={fine} alt="image" className="" />
        </div>
        <div
          className="w-1/2   flex-wrap bg-white 
        "
        >
          <div className=" py-8 ">
            <h1 className="text-3xl text-center  font-semi-bold py-6  ">
              Welcome to Lilies!
            </h1>
            <form className="px-12 ">
              <input
                type="text"
                className="mb-8 px-4 py-2 text-sm text-gray-700 bg-white border-gray-300  transition ease-in-out w-full"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Your First Name"
              />
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
                className="w-full bg-green text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:text-green-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-600 mb-4"
                type="submit"
              >
                SIGN UP
              </button>
              <div className="text-center ">
                <p className="text-sm font-bold">
                  Already have an account.
                  <Link
                    to="/login"
                    className="text-green hover:text-green-800 transition duration-200 ease-in-out font-normal"
                  >
                    LOGIN
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
