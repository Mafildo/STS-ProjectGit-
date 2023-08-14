import React from "react";
import "../components/footerPage.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillHome } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaFaxSolid } from "react-icons/lia";

const FooterPage = () => {
  return (
    <>
      <div className="footer-section">
        <div className="col-1">
          <div className="about-company-para-div">
            <p className="about-company-para">ABOUT COMPANY</p>

            <div className="hr-line">
              <hr className="straight-line" />
            </div>
          </div>
          <div className="paragraph-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            doloribus natus aut itaque quod doloremque quaerat corrupti porro,
            temporibus tenetur illo.
          </div>
          <div className="paragraph-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            doloribus natus aut itaque quod doloremque quaerat corrupti porro,
            temporibus tenetur illo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit, facilis.
          </div>
        </div>

        <div className="social-media">
          <div className="fb-icon">
            <BsFacebook />
          </div>
          <div className="insta-icon">
            <BsInstagram />
          </div>
          <div className="twitter-icon">
            <BsTwitter />
          </div>
          <div className="google-icon">
            <FcGoogle />
          </div>
        </div>

        <div className="useful-links-and-more-details-div">
          <div className="col-3">
            <div className="useful-links">
              <p className="useful-links-para">USEFUL LINKS</p>
              <div className="hr-line">
                <hr className="straight-line" />
              </div>
            </div>

            <div className="nav-links-footer">
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Services</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>

          <div className="details">
            <div className="connect-header">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.2em",
                  fontWeight: "600",
                }}
              >
                CONNECT WITH US
              </p>
              <div className="hr-line">
                <hr className="straight-line" />
              </div>
            </div>

            <div className="more-details">
              <div className="location-detail">
                <AiFillHome style={{ fontSize: "20px" }} />
                <p style={{ fontSize: "14px" }}>Itahari, Nepal</p>
              </div>

              <div className="mail-detail">
                <FiMail style={{ fontSize: "20px" }} />
                <p style={{ fontSize: "14px" }}>sts2002@gmail.com</p>
              </div>

              <div className="ph-number">
                <FaPhoneAlt style={{ fontSize: "20px" }} />
                <p style={{ fontSize: "14px" }}>+977 9845236589</p>
              </div>

              <div className="telephone-number">
                <LiaFaxSolid style={{ fontSize: "20px" }} />
                <p style={{ fontSize: "14px" }}>025-520232</p>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="opening-hour">
              <p className="opening-hour-para">OPENING HOURS</p>
              <div className="hr-line">
                <hr className="straight-line" />
              </div>
            </div>

            <div className="time-table">
              <div className="days">
              <p>Sun</p>

                <p>Mon-Thur</p>
                <p>Fri-Sat</p>
              </div>

              <div className="times">
                <p>8am-5pm</p>
                <p>8am-3pm</p>
                <p>8am-5pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-section">
          <p>
            &copy; 2023 Copyright. All rights reserved by{" "}
            <span style={{ color: "yellow" }}>Sitoula Tech Solutions.</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterPage;