import React from "react";
import Navbar from "../nav/Navbar";
import Header from "../nav/header";
import TopMost from "../nav/topMost";
import HomePage from "./components/homePage";


const Home = () => {
  return (
    <>
      <TopMost />
      <Header />
      <Navbar />
      <HomePage/>
    </>
  );
};

export default Home;
