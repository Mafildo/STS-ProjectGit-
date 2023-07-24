import React from "react";
import Navbar from "../nav/Navbar";
import Header from "../nav/header";
// import ImageSlider from "../carousel/ImageSlider";
import Slider from "../carousel/slider";
import Feature from "../featuring/feature";



const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <ImageSlider/> */}
      <Slider />
      <Feature/>
     
    
    </>
  );
};

export default Home;
