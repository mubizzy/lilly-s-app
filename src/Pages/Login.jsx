import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import fine from "../images/fine.png";
function Login() {
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
      <div className="flex justify-center  item-center px-6 py-12 flex-wrap   ">
        <div className="md:[67%]   md:mb-6 w-[764px] h-auto">
          <img src={fine} alt="image" className="h-27" />
        </div>
        <div
          className="w-full md[67%] lg:w-[40%]  flex-wrap 
        "
        >
          <div className="h-screen bg-white py-20 ">
            <h1 className="text-3xl text-center  font-semi-bold py-20  ">
              welcome back!
            </h1>
            <form className="px-12 ">
              <input
                type="text"
                className="mb-8 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300  transition ease-in-out w-full"
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
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
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
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 mb-4"
                type="submit"
              >
                LOGIN
              </button>
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg px-2">
                <p>
                  <Link
                    to="/sign-up"
                    className="text-green hover:text-blue-800 transition duration-200 ease-in-out "
                  >
                    Create an account
                  </Link>
                </p>
                <p>Forgot Password</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
