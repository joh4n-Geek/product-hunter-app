import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import "./ProfileDropDown.css";

const ProfileDropDown = ({ onShowDropDown }) => {
  const { user, logOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogOutUser = () => {
    logOutUser();
    navigate("/products", {
      replace: true,
    });
    onShowDropDown(false);
  };

  return (
    <div className="dropdown">
      <ul className="dropdown-content">
        <li>My profile</li>
        <NavLink to={"/user-profile"}>My profile</NavLink>
        <li>My products</li>
        <hr />
        <li onClick={() => {onLogOutUser()}}>Log Out</li>
      </ul>
    </div>
    // <div className="dropdown">
    //   <div className="dropdown-content">
    //     <a className="" href="#">
    //       User profile
    //     </a>
    //     <a href="#">My products</a>
    //     <a
    //       onClick={() => {
    //         onLogOut();
    //       }}
    //     >
    //       Log Out
    //     </a>
    //   </div>
    // </div>
  );
};

export default ProfileDropDown;
