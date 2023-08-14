import React from "react";
import "../components/aboutUsPage.css";
import aboutus from "../../../Images/aboutt.png";

const aboutUsPage = () => {
  return (
    <div className="about">
      <div className="left-d">
      <img className="aboutt" src={aboutus} alt="" />
      </div>

      <div className="right-d">
      <p className="para-20">
          Welcome to STS, where innovation and excellence meet! We are a
          dedicated team of passionate individuals who believe in pushing the
          boundaries of what's possible. Our mission is to provide top-notch
          products/services that cater to your unique needs, making your life
          easier and more enjoyable. <br />
          With years of experience under our belt, we take pride in delivering
          cutting-edge solutions that resonate with the latest trends and
          technological advancements. Whether you're a seasoned professional or
          a curious newcomer, we're here to provide you with the best tools and
          resources to thrive in your endeavors.
        </p>
        <button className="btn-about">More About Us</button>
      </div>
    </div>
  );
};

export default aboutUsPage;
