import React from "react";
import Navbar from "../nav/Navbar";
import Header from "../nav/header";
// import ImageSlider from "../carousel/ImageSlider";
// import Slider from "../carousel/slider";
import Feature from "../featuring/feature";
import TopMost from "../nav/topMost";
import HomePage from "./components/homePage";
import Footer from "../Footer/footer";
import ServicePage from "./components/servicePage";



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
      <ServicePage/>
      <Footer/>
     
    
    </>
  );
};

export default Home;
