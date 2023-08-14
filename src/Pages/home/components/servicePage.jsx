import React from "react";
import "./ServicePage.css";
import dis from "../../../Images/d2.jpg";
import { FaBell } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai"
import {BsFire} from "react-icons/bs"


const servicePage = () => {
  return (
    <div className="cont-S">
      <div className="left">
      <p className="p-9">ABOUT OUR SERVICE</p>
        <h1 className="h-9">What We Offer Is Not Just Services</h1>
        <p className="p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
          recusandae quam voluptatibus nobis quis quisquam dicta ipsam. Sint
          magnam placeat beatae perferendis accusantium deserunt suscipit
          commodi odio, cum at.
        </p>

        <div className="serve">
          <div className="left-div">
            <div className="project">
                <FaBell className="bell-icon"/>
                <p className="p-a">Satisfied Project</p>
            </div>
            <div className="team">
            <BsFire className="fire"/>
              <p className="p-b">Expert Members</p>
            </div>
          </div>

          <div className="right-div">
            <div className="target">
            <AiFillStar className="star"/>
              <p className="p-d">Target Fulfilled</p>
            </div>
            <div className="support">
            <BsFire  className="fire"/>
              <p className="p-c">Full Supporters</p>
            </div>
          </div>
        </div>

        <button className="btn-service">View Services</button>
       
      </div>

      <div className="right">
      <img className="dis" src={dis} alt="" />
      </div>
    </div>
  );
};

export default servicePage;
