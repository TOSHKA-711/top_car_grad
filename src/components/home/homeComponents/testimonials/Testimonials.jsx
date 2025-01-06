import React from "react";
import "./Testimonials.css";
import carsBlue from "/src/assets/separator-carsblue.svg";
import vector from "/src/assets/Vector.png";
import face1 from "/src/assets/face-1.png";
import face2 from "/src/assets/face-2.png";
import face3 from "/src/assets/face-3.png";

export default function Testimonials() {
  return (
    <div className="testimonials flex-col gap10" id="message">
      <span className="title flex-row gap10">
        <img src={carsBlue} alt="img" />
        TESTIMONIALS
      </span>
      <h2>What our clients says</h2>
      <div className="cards flex-row">
        <div className="card flex-col gap15">
          <img src={vector} alt="vector" className="vector"/>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </p>
          <div className="avatar flex-row gap10">
            <img src={face1} alt="face" />
            <span className="flex-col">
              <h3>Bradford B. Pounds</h3>
              <p>Santa Cruz, CA</p>
            </span>
          </div>
        </div>
        <div className="card flex-col gap15">
          <img src={vector} alt="vector" className="vector"/>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </p>
          <div className="avatar flex-row gap10">
            <img src={face2} alt="face" />
            <span className="flex-col">
              <h3>Catherine Lopez</h3>
              <p>Santa Cruz, CA</p>
            </span>
          </div>
        </div>
        <div className="card flex-col gap15">
          <img src={vector} alt="vector" className="vector"/>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </p>
          <div className="avatar flex-row gap10">
            <img src={face3} alt="face" />
            <span className="flex-col">
              <h3>Michael M. Brown</h3>
              <p>Santa Cruz, CA</p>
            </span>
          </div>
        </div>
        <div className="card flex-col gap15">
          <img src={vector} alt="vector" className="vector"/>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </p>
          <div className="avatar flex-row gap10">
            <img src={face1} alt="face" />
            <span className="flex-col">
              <h3>Bradford B. Pounds</h3>
              <p>Santa Cruz, CA</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
