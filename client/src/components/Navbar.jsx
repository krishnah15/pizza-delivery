import React from "react";
import photo from "../assets/pizza-slice.png";
import { logOut } from "../redux/userRedux";
import { useDispatch } from "react-redux";

export function Navbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className="navbar">
      <div className="heading">
        <img src={photo} alt="slice" className="slice" />
        <h2 className="meriNavHeading">Pizzalicious</h2>
      </div>
      <div className="navbarRight">
        <h3 className="mainNavItemList">Home</h3>
        <h3 className="mainNavItemList">My Orders</h3>
        <h3 className="mainNavItemList" onClick={handleLogout}>
          logout
        </h3>
      </div>
    </div>
  );
}
