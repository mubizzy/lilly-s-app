import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import fine from "../images/fine.png";
import OAuth from "../Section/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
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

  // validate your SignIn
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }

  return (
    <section className=" ">
      <div className="flex flex-col justify-center item-center lg:px-6 py-12 flex-wrap container mx-auto md: md:w-6/12 lg:w-10/12 lg:flex-row sm:4/12 ">
        <div className=" lg:w-1/2 ">
          <img src={fine} alt="image" className="" />
        </div>
        <div
          className="lg:w-1/2 flex-wrap bg-white 
        "
        >
          <div className=" py-6  ">
            <h1 className="text-3xl text-center  font-semi-bold py-12  ">
              Welcome back!
            </h1>
            <form className="px-12  ">
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
                className="w-full bg-green text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-green-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-800 mb-4"
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
              <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
