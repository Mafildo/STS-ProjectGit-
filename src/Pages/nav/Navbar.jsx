import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Categories from "./categories";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [hide, setHide] = useState(true);
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
            <li>Home</li>
            <li>Product</li>
            <li>Service</li>
            <li>About Us</li>
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
