import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AiFillMoon, AiOutlineSearch, AiOutlineSun } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import ProfileDropDown from "../../components/profileDropDown/ProfileDropDown";
import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [activeLink, setActiveLink] = useState("products");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const onToggleColorMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <img
        onClick={() => {
          navigate("/products");
        }}
        src="src\assets\product-hunter-logo.png"
        alt="Product Hunter logo"
        className="product-hunter-logo"
      />
      <ul className="navbar-links">
        <li
          onClick={() => {
            setActiveLink("products");
          }}
          className={activeLink === "products" ? "active" : ""}
        >
          <NavLink
            to="/products"
            className={(isActive) => {
              isActive ? "active" : "";
            }}
          >
            Products
          </NavLink>
        </li>
        <li
          onClick={() => {
            setActiveLink("news");
          }}
          className={activeLink === "news" ? "active" : ""}
        >
          <NavLink to="/news">News</NavLink>
        </li>
        <li
          onClick={() => {
            setActiveLink("community");
          }}
          className={activeLink === "community" ? "active" : ""}
        >
          <NavLink
            to="/community"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Community
          </NavLink>
        </li>
        {/* <li
          onClick={() => {
            setActiveLink("products");
          }}
          className={activeLink === "products" ? "active" : ""}
        >
          Products
        </li>
        <li onClick={() => {setActiveLink("news")}} className={activeLink === "news" ? "active" : ""}>
          News
        </li>
        <li
          onClick={() => {
            setActiveLink("community");
          }}
          className={activeLink === "community" ? "active" : ""}
        >
          Community
        </li> */}
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search a product..." />
        <span className="toggle-icon">
          <AiOutlineSearch size={25} color="#fff" />
        </span>
      </div>
      <span
        className="toggle-icon"
        onClick={() => {
          onToggleColorMode();
        }}
      >
        {theme === "light" ? (
          <AiFillMoon size={25} />
        ) : (
          <AiOutlineSun size={25} />
        )}
      </span>
      {!user ? (
        <button
          onClick={() => navigate("/login-page")}
          className="signIn-btn"
          type="button"
        >
          Sign In
        </button>
      ) : (
        <div className="user-actions">
          <img
            onClick={() => {
              setShowDropDown((prev) => !prev);
            }}
            className="user-profile-image"
            src="src\assets\user-profile.jpg"
            alt="User profile image"
          />
          {showDropDown && <ProfileDropDown onShowDropDown={setShowDropDown} />}
        </div>
      )}
    </div>
  );
};

// Como definir el propType para setTheme???
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Navbar;
