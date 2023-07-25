import React from "react";
import Navbar from "../nav/Navbar";
import Header from "../nav/header";
// import ImageSlider from "../carousel/ImageSlider";
// import Slider from "../carousel/slider";
import Feature from "../featuring/feature";
import TopMost from "../nav/topMost";
import HomePage from "./components/homePage";



const Home = () => {
  return (
    <>
    <TopMost/>
      <Header />
      <Navbar />
      <HomePage/>
      {/* <ImageSlider/> */}
      {/* <Slider /> */}
      <Feature/>
     
    
    </>
  );
};

export default Home;
