import React from "react";
import "./Most.css";
import carsWhite from "/src/assets/separator-carswhite.svg";
import img from "/src/assets/rt-mercedes-benz-cpo-1-1531414981.avif";

export default function Most() {
  return (
    <div className="most flex-col flex-center">
        <h1>Most Searched Cars</h1>
      <div className="container flex-row">
        <img className="most-img" src={img} alt="img" />
        <div className="most-card flex-col flex-center">
          <div className="card-text flex-col gap10">
            <h2>
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
              Tempore,
              <br /> debitis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! <br /> Quidem est esse numquam odio deleniti, beatae,
              magni dolores provident <br /> quaerat totam eos, aperiam
              architecto eius quis quibusdam fugiat dicta.
            </p>
          </div>
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
}
