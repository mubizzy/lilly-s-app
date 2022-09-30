import React from "react";
import image from "../images/img1.png";
const Hero = () => {
  return (
    <div className="container px-4 py-16 mx-auto grid md:grid-cols-2 gap-32">
      <div className="py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium  text-primary leading-loose">
          Order
          <span className="text-pinky"> food </span>
          anytime,
          <br /> anywhere
        </h1>
        <p className="text-primary mt-8 font-normal leading-loose text-sm">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </p>
      </div>
      <div className="">
        <img src={image} className="w-96 h-96" alt="Neva" />{" "}
      </div>
    </div>
  );
};

export default Hero;
