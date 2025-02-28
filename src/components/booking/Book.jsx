import React from "react";
import "./Book.css";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo-2.png";
import image from "/src/assets/City driver-rafiki.svg";
const Book = () => {
  const handleBook = () => {
    window.alert("Car Booked");
    window.location = "carInformation";
  };
  return (
    <>
      <div className="hero booking-hero" id="hero">
        <div className="form flex-col flex-center">
          <img src={logo} alt="logo" className="logo" />
          <input name="email" type="text" placeholder="Your Name" />
          <input name="email" type="text" placeholder="email to contact" />
          <input name="email" type="number" placeholder="Booking days" />
          <button className="transition" onClick={handleBook}>
            Book Now
          </button>
        </div>
     <img src={image} alt="car" className="booking-car"/>
      </div>
    </>
  );
};

export default Book;
