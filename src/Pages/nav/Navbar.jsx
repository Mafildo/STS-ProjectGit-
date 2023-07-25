import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <nav>
        <p>Categories</p>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Service</li>
          <li>About Us</li>
        </ul>
        <div className="user-cart-icon-div">
          <AiOutlineShoppingCart className="cart-icon" />
          <BiSolidUserCircle className="user-icon" />
        </div>
      </nav>

      <div className="lower-container">---</div>
    </>
  );
};

export default Navbar;
