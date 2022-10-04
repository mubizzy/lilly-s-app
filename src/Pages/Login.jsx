import React, { useState } from "react";
import fine from "../images/fine.png";
function Login() {
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
      <div className="flex justify-center  item-center px-6 py-12 flex-wrap mx-auto ">
        <div className="md:[67%] lg:[20%] mb-12 md:mb-6">
          <img src={fine} alt="" className="h-30 w-30" />
        </div>
        <div className="w-full md[67%] lg:w-[40%] ">
          <form>
            <input
              type="text"
              className="w-full"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
