import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
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
    <section className="text-white ">
      <div className="flex justify-center  item-center px-6 py-12 flex-wrap mx-auto ">
        <div className="md:[67%] lg:[50%] mb-12 md:mb-6">
          <img src={fine} alt="" className="" />
        </div>
        <div className="w-full md[67%] lg:w-[40%] ">
          <h1 className="text-3xl text-center mt-6 font-bold">welcome back!</h1>
          <form>
            <input
              type="text"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300  transition ease-in-out"
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
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
