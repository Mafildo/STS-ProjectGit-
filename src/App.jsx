import React from "react";
import Home from "./Pages/home/home";
import Product from "./Pages/Product/product";
import Service from "./Pages/Service/service";
import AboutUs from "./Pages/AboutUs/aboutUs";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
