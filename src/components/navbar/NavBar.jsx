import React from "react";
import "./NavBar.css";
import logo from "/src/assets/logo-2.png"
import { Link } from "react-router-dom";

export default function NavBar() {




  return (
    <div className="navbar flex-row">
      <div className="logo flex-row">
        <img src={logo} alt="logo" />
      </div>
      <div className="links flex-row gap35">
        <Link className="transition" to="/">
          Home
        </Link>
        {/* <a className="transition" href="#about">
          About Us
        </a> */}
        <a className="transition" href="/#message">
          Message
        </a>
        <Link className="transition" to="/search">Buy</Link>
        <Link className="transition" to="/sale">Sale</Link>
      </div>
      <div className="contact-btn transition">
        <a href="tel:+201228099652">Contact US</a>
      </div>
    </div>
  );
}
