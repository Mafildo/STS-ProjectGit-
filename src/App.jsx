import React from "react";
import Home from "./Pages/home/home";
import Product from "./Pages/Product/product";
import Service from "./Pages/Service/service";
import AboutUs from "./Pages/AboutUs/aboutUs";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./Pages/Product/component/singleProduct/singleProductPage";
import Cart from "./Pages/Cart/cartPage";
import ErrorPage from "./Pages/Error/ErrorPage";





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
};

export default App;
