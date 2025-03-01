import React from "react";
import "./NavBar.css";
import logo from "/src/assets/logo-2.png";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="navbar flex-row">
      <div className="logo flex-row">
        <img src={logo} alt="logo" />
      </div>

      {location.pathname === "/register" || location.pathname === "/" ? (
        <h1 style={{color:"#1E5DBC"}}>Top Car</h1>
      ) : (
        <div className="links flex-row gap35">
          <Link className="transition" to="/home">
            Home
          </Link>
          <Link className="transition" to="/booking">
            Booking
          </Link>
          <Link className="transition" to="/search">
            Buy
          </Link>
          <Link className="transition" to="/sale">
            Sell
          </Link>
        </div>
      )}

      <div className="contact-btn transition">
        {/* <a href="tel:+201228099652">Contact US</a> */}
        <Link className="transition" to="/message">
            Contact Us
          </Link>
      </div>
    </div>
  );
}
