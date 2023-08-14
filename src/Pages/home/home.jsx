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
import AboutUsPage from "./components/aboutUsPage";
import Contactus from "./components/contactus"; 



const Home = () => {
  return (
    <>
    <TopMost/>
      <Header />
      <Navbar />
      <HomePage/>
      <Feature/>
      <ServicePage/>
      <AboutUsPage/>
      <Contactus/>
      <Footer/>
     
    
    </>
  );
};

export default Home;
