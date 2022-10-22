import React from "react";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
const Testimonial = () => {
  return (
    <section className="">
      <div className="space-y-6">
        <div className="mx-auto container flex flex-col  items-center gap-2 md:flex-row md:px-28 md:space-x-6 md:max-w-6xl ">
          <div className="flex flex-col bg-purple-300 md:space-x-6 md:px-4 md:py-2">
            <div className="flex flex-row   bg-purple-300 items-center mb-4">
              <img src={img5} alt="" className="w-16 mr-5" />
              <h2 className="text-sm items-center ">Michelle Ikeji</h2>
            </div>
            <p className="px-8">
              simple and effective. no long hours searching for reliable
              influencers.
            </p>
          </div>

          <div className="flex flex-col bg-purple-300 md:space-x-6 md:px-4 md:py-2">
            <div className="flex flex-row   bg-purple-300 items-center mb-4">
              <img src={img6} alt="" className="w-16 mr-5" />
              <h2 className="text-sm items-center text-center">Ovie Boco</h2>
            </div>
            <p class="px-">
              An absolute influencer and brand marketing tool, wow all in one
            </p>
          </div>
          {/* second Testimonial */}
        </div>

        <div className="mx-auto container flex flex-col  items-center gap-2  md:flex-row md:px-28 md:space-x-6 md:max-w-6xl ">
          <div className="flex flex-col bg-purple-300 md:space-x-6 md:px-4 md:py-2">
            <div className="flex flex-row   bg-purple-300 items-center mb-4">
              <img src={img7} alt="" className="w-16 mr-5" />
              <h2 className="text-sm items-center ">Jamila Datti</h2>
            </div>
            <p className="px-">
              Great service, I had an amazing experience using Stratifi to get
              an influenece
            </p>
          </div>

          <div className="flex flex-col bg-purple-300 md:space-x-6 md:px-4 md:py-2">
            <div className="flex flex-row   bg-purple-300 items-center mb-4">
              <img src={img8} alt="" className="w-16 mr-5" />
              <h2 className="text-sm items-center text-center">
                Dayo Inaolaji
              </h2>
            </div>
            <p class="px-4">
              Using Stratifi to get an influencer was the best decision I made
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
