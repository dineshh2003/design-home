import React from 'react';
import '../component/Navbar.css';
import logo from "../component/images/logo-2.jpg";

const Navbar = () => {
  return (
    <div className="container">
        <img src={logo} alt="" className="logo--img" />
        <nav className="Nav--link">
          <li className="navbar-items Home">Home</li>
          <li className="navbar-items">Category</li>
          <li className="navbar-items">About</li>
          <li className="navbar-items">WishList</li>
          {/* <Link to="/" className="navbar-items">Home</Link>
          <Link to="/category" className="navbar-items">Category</Link>
          <Link to="/about" className="navbar-items">About</Link>
          <Link to="/wishlist" className="navbar-items">WishList</Link> */}
        </nav>
        <div className="navbar--btn">
          <button className="Cart-btn">Cart</button>
          <button className="Login-btn">Login</button>
        </div>
    </div>
  )
}

export default Navbar
