import React from "react";
import "../AllProducts/AllProduct.css";
import Controller from "../../../../Images/controller.png";
import { HiShoppingCart } from "react-icons/hi";

const AllProduct = () => {
  return (
    <div className="main-div-product">
      <div className="category-div-1">
        <div className="controller-div">
          <img className="controller" src={Controller} alt="" />
        </div>
        <div className="controller-p">
          <h3 className="c-h">Controller</h3>
          <p className="c-p">Rs.6000.00</p>
          <p className="c-pp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            harum! Nihil, cupiditate. Laudantium excepturi possimus odit
            voluptate, ipsam quaerat! Ut volupt
          </p>

          <div className="cart-div">
            <div className="cart-btn">
              <HiShoppingCart className="cartt" />
              <h6 className="h-cartt">Add To Cart</h6>
            </div>
            <div className="heart">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
