import React from "react";
import "./NavBar.css";
import logo from "/src/assets/logo-2.png"

export default function NavBar() {
  return (
    <div className="navbar flex-row">
      <div className="logo flex-row">
        <img src={logo} alt="logo" />
      </div>
      <div className="links flex-row gap35">
        <a className="transition" href="#hero">
          Home
        </a>
        <a className="transition" href="#about">
          About Us
        </a>
        <a className="transition" href="#message">
          Message
        </a>
        <a className="transition">Search</a>
      </div>
      <div className="contact-btn transition">
        <a href="tel:+201228099652">Contact US</a>
      </div>
    </div>
  );
}
