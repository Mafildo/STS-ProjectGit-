import React from "react";
import "../components/contactus.css";
import contact from "../../../Images/contact.jpg";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const contactus = () => {
  return (
    <>
      <div className="mc">
          <div className="contact-us-div">Contact Us</div>

          <div className="items">
            <div className="one">
              <div className="one-div">
                <BiLogoGmail />
                <p style={{ fontSize: "12px" }}>SitoulaTech@gmail.com</p>
              </div>
            </div>

            <div className="two">
              <div className="two-div">
                <BsTelephoneFill />
                <p style={{ fontSize: "12px" }}>9804310444</p>
              </div>
            </div>

            <div className="three">
              <div className="three-div">
                <MdLocationOn />
                <p style={{ fontSize: "12px" }}>Itahari-6, Sunsari</p>
              </div>
            </div>
          </div>
       <button className="btn-cont">View More</button>
      </div>
    </>
  );
};

export default contactus;
