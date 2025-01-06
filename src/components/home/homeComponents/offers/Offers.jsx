import React from "react";
import "./Offers.css"
import carsBlue from "/src/assets/separator-carsblue.svg";
import img1 from "/src/assets/pexels-artem-podrez-8985915 1.png";
import img2 from "/src/assets/pexels-artem-podrez-8985915 1 (1).png";
import img3 from "/src/assets/thumb-5.jpg";

export default function Offers() {
  return (
    <div className="offers flex-col">
      <div className="offers-text">
        <span className="flex-row gap10">
          <img src={carsBlue} alt="img" />
          what we offer
        </span>
        <h2>Explore Our Services</h2>
      </div>
      <div className="offers-cards flex-row ">
        <div className="card flex-col flex-center">
          <img src={img1} alt="img" />
          <h3>Oil & Fluids services</h3>
        </div>
        <div className="card flex-col flex-center">
          <img src={img2} alt="img" />
          <h3>Wheel balancing service</h3>
        </div>
        <div className="card flex-col flex-center">
          <img src={img3} alt="img" />
          <h3>overhaul services</h3>
        </div>
      </div>
      <button className="offers-btn">view More service</button>
    </div>
  );
}
