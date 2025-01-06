import React from "react";
import "./Hero.css";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import img1 from "/src/assets/best-prices.png"
import img2 from "/src/assets/guarantee.png"
import img3 from "/src/assets/certified.png"
export default function Hero() {
  return (
    <>
    <div className="hero" id="hero">
      <div className="hero-text flex-col gap5">
        <h1>Expert Car Repair <br/> Services certified</h1>
        <p>
          We offering well-trained mechanics and excellent customer service, <br/> all
          at competitive prices of vehicle repairs at your home or place of
          work.
        </p>
        <span className="flex-row gap30">
          <button>make appointment</button>
          <a className="hero-contact flex-row flex-center gap5" href="tel:+201228099652">
            <MdOutlinePhoneInTalk />
            +20 122 809 962
          </a>
        </span>
      </div>
    </div>
    <div className="hero-cards">
        <div className="child flex-row flex-center gap25">
            <img src={img1} alt="icon"/>
            <span>
                <h2>Best Prices</h2>
                <p>All mechanical repairs and services are available at affordable rates </p>
            </span>
        </div>
        <div className="child flex-row flex-center gap25">
            <img src={img2} alt="icon"/>
            <span>
                <h2>100% Guarantee</h2>
                <p>All of our repairs and services come with a guarantee period </p>
            </span>
        </div>
        <div className="child flex-row flex-center gap25">
            <img src={img3} alt="icon"/>
            <span>
                <h2>Certified Mechanics</h2>
                <p>All of our mechanics are qualified and are regularly trained. </p>
            </span>
        </div>
    </div>
    </>
  );
}
