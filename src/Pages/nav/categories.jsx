import React, { useState } from "react";
import "./categories.css";
import { Link } from "react-router-dom";


const Categories = ({ hide }) => {
  const link = window.location.href;

  return (
    <>
      <div
        className="main-container"
        style={{ height: hide ? "0px" : "8.11em" }}  >

        <div className="cont" ><Link
               className="nav-linkk"
                style={
                  link === "http://localhost:5173/Home"
                    ? { color: "yellow" }
                    : null
                } 
                to="/Home"
              >
                Home
              </Link></div>

        <div className="cont"> <Link
                className="nav-linkk"
               
                style={
                  link === "http://localhost:5173/Product"
                    ? { color: "yellow" }
                    : null
                }
                to="/Product"
              >
                Product
              </Link></div>
        <div className="cont">  <Link
                className="nav-linkk"
                style={
                  link === "http://localhost:5173/Service"
                    ? { color: "yellow" }
                    : null
                }
                to="/Service"
              >
                Service
              </Link></div>
        <div className="cont"> <Link
                className="nav-linkk"
                style={
                  link === "http://localhost:5173/AboutUs"
                    ? { color: "yellow" }
                    : null
                }
                to="/AboutUs"
              >
                AboutUs
              </Link></div>
      </div>
    </>
  );
};

export default Categories;
