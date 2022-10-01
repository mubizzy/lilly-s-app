import React from "react";
import images from "../images/img2.png";
import img2 from "../images/img3.png";
import img3 from "../images/img4.png";
const Sections = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="font-bold text-primary text-4xl py-4">
          Special Meals of the day!
        </h2>
        <p className="px-8 text-white">
          Check our sepecials of the day and get discounts on all our meals{" "}
          <br />
          and swift delivery to what ever location within Ilorin.
        </p>
      </div>
      <div className="grid grid-cols-3 px-20 py-20 mt-6 gap-16 ">
        <div className="">
          <div className="lg:pl-20">
            <img src={images} alt="noodles" className="w-48 h-48  mb-4 " />
          </div>

          <h3 className="text-center mb-4 text-pink font-bold text-2xl">
            Stir fry Pasta
          </h3>
          <p className="text-center text-white font-normal">
            Stir fry pasta yada yada yada because of Sesan
          </p>
        </div>
        <div className="">
          <div className="lg:pl-20">
            <img src={img2} alt="noodles" className="w-48 h-48 mb-4" />
          </div>

          <h3 className="text-center mb-4 text-pink text-2xl font-bold">
            Meat Balls
          </h3>
          <p className="text-center text-white">
            Stir fry pasta yada yada yada because of Sesan
          </p>
        </div>
        <div className="">
          <div className=" lg:pl-20">
            {" "}
            <img src={img3} alt="noodles" className="w-48 h-48 mb-4" />
          </div>

          <h3 className="text-center mb-4 text-pink font-bold text-2xl">
            Burger Meal
          </h3>
          <p className="text-center text-white">
            Stir fry pasta yada yada yada because of Sesan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sections;
