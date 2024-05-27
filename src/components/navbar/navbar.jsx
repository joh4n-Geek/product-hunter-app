import PropTypes from "prop-types";
import { AiFillMoon, AiOutlineSearch, AiOutlineSun } from "react-icons/ai";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  const [activeLink, setActiveLink] = useState('products');

  const onToggleColorMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img
        src="src\assets\product-hunter-logo.png"
        alt="Product Hunter logo"
        className="product-hunter-logo"
      />
      <ul className="navbar-links">
        <li onClick={() => {setActiveLink("products")}} className={activeLink === "products" ? "active" : ""}>Products</li>
        <li onClick={() => {setActiveLink("news")}} className={activeLink === "news" ? "active" : ""}>News</li>
        <li onClick={() => {setActiveLink("community")}} className={activeLink === "community" ? "active" : ""}>Community</li>
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
      <button className="ms-4" type="button">
        Sign in
      </button>
    </div>
    // Bootstrap navbar
    // <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       <img
    //         src="src\assets\react.svg"
    //         alt="Logo"
    //         width="30"
    //         height="24"
    //         className="d-inline-block align-text-top"
    //       ></img>
    //       Product Hunter
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <a className="nav-link active" aria-current="page" href="#">
    //           Products
    //         </a>
    //         <a className="nav-link" href="#">
    //           Articles
    //         </a>
    //         <a className="nav-link" href="#">
    //           Another thing
    //         </a>
    //       </div>
    //     </div>
    //     <form className="container-fluid justify-content-start">
    //       <button className="btn btn-sm btn-outline-secondary me-2" type="button">
    //         Sign in
    //       </button>
    //       <button className="btn btn-outline-success" type="button">
    //         Sign up
    //       </button>
    //     </form>
    //   </div>
    // </nav>
  );
};

// Como definir el propType para setTheme???
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Navbar;
