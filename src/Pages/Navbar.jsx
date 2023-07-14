import React from "react";
import "./Navbar.css";
import logo from "../Images/Logo-removebg.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="upper-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="search-bar">
          
        </div>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Service</li>
          <li>About Us</li>
        </ul>

        <div className="user-cart-icon-div">
          <AiOutlineShoppingCart className="cart-icon" />
          <BiSolidUserCircle className="user-icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
