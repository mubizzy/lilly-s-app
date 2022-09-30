import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div className="px-4 py-2 container mx-auto top-0 flex justify-between items-center">
      <div className=" flex items-center text-white font-bold text-4xl">
        <img
          src={logo}
          className="mr-4 h-57.48 w- 67 cursor-pointer "
          alt="Neva"
          onClick={() => navigate("/")}
        />{" "}
        Lilies
      </div>
      <div className="flex gap-8">
        <div
          className="fw-bold py-3 text-pinky font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className="py-3 text-white font-medium cursor-pointer"
          onClick={() => navigate("/login")}
        >
          login
        </div>
        <button
          className="bg-pink hover:bg-pink text-green font-semibold py-3 px-6 rounded"
          onClick={() => navigate("/sign-up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
