import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Categories from "./categories";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hide, setHide] = useState(true);
  const link = window.location.href;
  return (
    <>
      <div className="" style={{ position: "relative" }}>
        <nav>
          <div className="menu-icon-div">
            {!hide ? (
              <RxCross1 className="menu-icon" onClick={() => setHide(!hide)} />
            ) : (
              <AiOutlineMenu
                className="menu-icon"
                onClick={() => setHide(!hide)}
              />
            )}
          </div>

          <ul className="navbar-items">
            <li>
              <Link
               className="nav-link"
                style={
                  link === "http://localhost:5173/Home"
                    ? { color: "yellow" }
                    : null
                } 
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                
                style={
                  link === "http://localhost:5173/Product"
                    ? { color: "yellow" }
                    : null
                }
                to="/Product"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                style={
                  link === "http://localhost:5173/Service"
                    ? { color: "yellow" }
                    : null
                }
                to="/Service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                style={
                  link === "http://localhost:5173/AboutUs"
                    ? { color: "yellow" }
                    : null
                }
                to="/AboutUs"
              >
                AboutUs
              </Link>
            </li>
          </ul>

          <div className="cart-icon-div">
            <AiOutlineShoppingCart className="cart-icon" />
          </div>
        </nav>
        <Categories hide={hide} />
      </div>
    </>
  );
};

export default Navbar;
