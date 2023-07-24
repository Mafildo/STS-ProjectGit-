import React, { useState } from "react";
import "./categories.css";

const Categories = ({ hide }) => {
  return (
    <>
      <div
        className="main-container"
        style={{ height: hide ? "0px" : "8.32em" }}  >
        <div className="cont">Home</div>
        <div className="cont">Product</div>
        <div className="cont">Services</div>
        <div className="cont">About Us</div>
      </div>
    </>
  );
};

export default Categories;
