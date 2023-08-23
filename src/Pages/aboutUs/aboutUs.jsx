import React from "react";
import Navbar from "../nav/Navbar"
import Header from "../nav/header";
import TopMost from "../nav/topMost";
import AboutP from "./components/AboutP";


const AboutUs = () => {
  return (
    <>
      <TopMost />
      <Header />
      <Navbar />
      <AboutP/>
      
    </>
  );
};

export default AboutUs;
