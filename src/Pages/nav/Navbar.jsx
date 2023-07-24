import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav>
        {/* <p>Categories</p> */}
        <ul >
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/Home">Home</NavLink>
          </li>
          <li>
          <NavLink className="nav-link" activeClassName="active" to="/Product">Product</NavLink>
          </li>
          <li>
          <NavLink className="nav-link" activeClassName="active" to="/Service">Service</NavLink>
          </li>
          <li>
          <NavLink className="nav-link" activeClassName="active" to="/About Us">About Us</NavLink>
          </li>
        </ul>
        <div className="user-cart-icon-div">
          <AiOutlineShoppingCart className="cart-icon" />
          <BiSolidUserCircle className="user-icon" />
        </div>
      </nav>

      {/* <div className="lower-container">---</div> */}
    </>
  );
};

export default Navbar;
