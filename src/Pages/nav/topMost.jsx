import React, { useState } from "react";
import "./topMost.css";
import { MdLocationOn } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import Accounts from "./accounts";

const TopMost = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="location-user-div">
        <div className="location">
          <div className="location-icon">
            <MdLocationOn />
          </div>

          <div className="Store-location-para">Store location</div>
        </div>

        <div className="users-div" onClick={()=>setHide(!hide)}>
          <div className="user-icon">
            <BiSolidUserCircle />
          </div>
          <div className="Account-para">Account</div>

          <Accounts hide={hide}/>
        </div>

      </div>

    </>
  );
};

export default TopMost;
