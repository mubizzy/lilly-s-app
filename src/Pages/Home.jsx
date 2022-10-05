import React from "react";
import Footer from "../Section/Footer";
import Hero from "../Section/Hero";
import Navbar from "../Section/Navbar";
import Sections from "../Section/Sections";
import Subscribe from "../Section/Subscribe";

function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Sections></Sections>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default Home;
