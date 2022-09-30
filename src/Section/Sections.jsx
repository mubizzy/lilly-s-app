import React from "react";
import images from "../images/img2.png";
import img2 from "../images/img3.png";
import img3 from "../images/img4.png";
const Sections = () => {
  return (
    <section>
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
      <div className="grid grid-cols-3 px- py-5 mt-4 ">
        <div className="">
          <img src={images} alt="noodles" className="w-48 h-48 item-center" />
          <h3 className="text-center">Stir fry Pasta</h3>
          <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
        <div>
          <img src={img2} alt="noodles" className="w-48 h-48" />
          <h3 className="text-center">Meat Balls</h3>
          <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
        <div>
          <img src={img3} alt="noodles" className="w-48 h-48" />
          <h3 className="text-center">Burger Meal</h3>
          <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
      </div>
    </section>
  );
};

export default Sections;
