import React from "react";
import "../Error/ErrorPage.css";
import Error from "../../Images/es.jpg";
const ErrorPage = () => {
  return (
    <div className="error">
      <img className="error-img" src={Error} alt="" />
    </div>
  );
};

export default ErrorPage;
