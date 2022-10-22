import React from "react";
import Footer from "../Section/Footer";
import Hero from "../Section/Hero";
import Navbar from "../Section/Navbar";
import Sections from "../Section/Sections";
import Subscribe from "../Section/Subscribe";
import Testimonial from "../Section/Testimonial";
function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Sections></Sections>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
