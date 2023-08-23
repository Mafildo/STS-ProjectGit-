// import React from "react";
// import "../components/homePage.css";
// import pc from "../../../Images/pc.png";
// import { motion } from "framer-motion";
// import { BsArrowRight } from "react-icons/bs";
// // import { useParams } from "react-router-dom";

// const HomePage = () => {

//   return (
//     <>
//       <div className="home-page-main-container">
//         <div className="container">
//           <div className="left-side">
//             <motion.p
//               initial={{ y: "-0.5rem", opacity: 0 }}
//               animate={{ y: "0", opacity: 1 }}
//               transition={{ duration: 3, type: "spring" }}
//               className="para1"
//             >
//               ASUS PC SET
//             </motion.p>
//             <p></p>
//             <motion.p
//               initial={{ x: "-1rem", opacity: 0 }}
//               animate={{ x: "0", opacity: 1 }}
//               transition={{ duration: 3, type: "spring" }}
//               className="para2"
//             >
//               Featuring new <span className="asus-pc">ASUS PC</span>  for Gamer Folks
//             </motion.p>
//             <motion.p
//               initial={{ y: "0.5rem", opacity: 0 }}
//               animate={{ y: "0", opacity: 1 }}
//               transition={{ duration: 3, type: "spring" }}
//               className="para3"
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
//               recusandae odio, voluptatem exercitationem quaerat eaque
//               voluptatum natus cumque iste? aut!
//             </motion.p>

//             <motion.div
//               initial={{ x: "-1rem", opacity: 0 }}
//               animate={{ x: "0", opacity: 1 }}
//               transition={{ duration: 3, type: "spring" }}
//               className="explore"
//             >
//                Explore <BsArrowRight className="explore-arrow-icon"/>
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ x: "0.5rem", opacity: 0 }}
//             animate={{ x: "0", opacity: 1 }}
//             transition={{ duration: 3, type: "spring" }}
//             className="right-side"
//           >
//             <img src={pc} alt="" className="pc-image" />
//           </motion.div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import "../components/homePage.css";
import pc from "../../../Images/pc.png";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div className="home-page-main-container">
        <div className="containerr">
          <div className="left-side">
            <motion.p
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="para1"
            >
              ASUS PC SET
            </motion.p>
            <p></p>
            <motion.p
              initial={{ x: "-5rem", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="para2"
            >
              Featuring new <span className="asus-pc">ASUS PC</span> for Gamer
              Folks
            </motion.p>
            <motion.p
              initial={{ y: "3rem", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
              className="para3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              recusandae odio, voluptatem exercitationem quaerat eaque
              voluptatum natus cumque iste? aut!
            </motion.p>

            <motion.div
              initial={{ x: "-1rem", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
              className="explore"
            >
              Explore <BsArrowRight className="explore-arrow-icon" />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="right-side"
          >
            <img src={pc} alt="" className="pc-image" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
