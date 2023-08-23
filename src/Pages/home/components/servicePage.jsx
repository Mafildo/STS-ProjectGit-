// import React from "react";
// import "./ServicePage.css";
// import dis from "../../../Images/d2.jpg";
// import { FaBell } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai"
// import {BsFire} from "react-icons/bs"

// const servicePage = () => {
//   return (
//     <div className="cont-S">
//       <div className="left">
//       <p className="p-9">ABOUT OUR SERVICE</p>
//         <h1 className="h-9">What We Offer Is Not Just Services</h1>
//         <p className="p-10">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
//           recusandae quam voluptatibus nobis quis quisquam dicta ipsam. Sint
//           magnam placeat beatae perferendis accusantium deserunt suscipit
//           commodi odio, cum at.
//         </p>

//         <div className="serve">
//           <div className="left-div">
//             <div className="project">
//                 <FaBell className="bell-icon"/>
//                 <p className="p-a">Satisfied Project</p>
//             </div>
//             <div className="team">
//             <BsFire className="fire"/>
//               <p className="p-b">Expert Members</p>
//             </div>
//           </div>

//           <div className="right-div">
//             <div className="target">
//             <AiFillStar className="star"/>
//               <p className="p-d">Target Fulfilled</p>
//             </div>
//             <div className="support">
//             <BsFire  className="fire"/>
//               <p className="p-c">Full Supporters</p>
//             </div>
//           </div>
//         </div>

//         <button className="btn-service">View Services</button>

//       </div>

//       <div className="right">
//       <img className="dis" src={dis} alt="" />
//       </div>
//     </div>
//   );
// };

// export default servicePage;

import React from "react";
import "./servicePage.css";
import group from "../../../Images/d2.jpg";
import secondGroup from "../../../Images/d2.jpg";
import { BiSolidBell } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFire } from "react-icons/bs";

const ServicePage = () => {
  return (
    <>
      <div className="service-landing-container">
        <div className="left">
          <div className="paragraphs">
            <p className="p1">ABOUT OUR SERVICE</p>
            <h1 className="h1">What We Offer Is Not Just Services</h1>
            <p className="p2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis blanditiis nisi voluptate doloribus quasi ratione rem
              nihil fugiat at magnam porro, autem atque deserunt cumque? Commodi
              ratione illum consequuntur aliquid.
            </p>
          </div>

          <div className="group-pic">
            <img className="pic" src={group} alt="" />
          </div>

          <div className="bell-star-fire-icons">
            <div className="bell-star">
              <div className="bell">
                <BiSolidBell className="fire-icon" />
                <p className="project-para">Statisfied Project</p>
              </div>

              <div className="star">
                <BsStarFill className="fire-icon" />
                <p className="target-para">Target Fulfilled</p>
              </div>
            </div>

            <div className="fire-person">
              <div className="fire">
                <BsFire className="fire-icon" />
                <p className="fire-para">Expert Members</p>
              </div>

              <div className="person">
                <BsFillPersonFill className="fire-icon" />
                <p className="support-para">Full Supporters</p>
              </div>
            </div>
          </div>

          <div className="view-score-para-div">View Services</div>
        </div>

        <div className="right">
          <div className="second-group-pic">
            <img className="group-pic-2" src={secondGroup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
