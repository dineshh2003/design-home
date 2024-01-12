import React from "react";
import "../component/Navbar.css";
import logo from "../component/images/logo-2.jpg";
import { NavLink } from "react-router-dom";
import { Navigate , useNavigate} from "react-router-dom";





const Navbar = () => {
  
  const navigate = useNavigate();
  const addtocart = (event) => {
      navigate('./cart')
  }


  return (
    <div className="container">
      <img src={logo} alt="" className="logo--img" />
      <nav className="Nav--link">
        <li className="navbar-items ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar-items">
          <NavLink to="explore">Category</NavLink>
        </li>
        <li className="navbar-items">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="navbar-items">
          <NavLink to="wishlist">Wishlist</NavLink>
        </li>
      </nav>
      <div className="navbar--btn">
        <button className="Cart-btn" onClick={addtocart}>Cart</button>
        <button className="Login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
