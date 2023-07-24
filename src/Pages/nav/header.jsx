import React from "react";
import { FaShippingFast } from "react-icons/fa";
import logo from "../../Images/Logo-removebg.png";
import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <div className="upper-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <BiSearch className="search-icon" />
          </button>
        </div>
        <div className="order">
          <FaShippingFast className="delivery-truck-icon" />
          <p style={{ color: "white", fontSize: ".8rem" }}>
            Free Shipping on orders
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
