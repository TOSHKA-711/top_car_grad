import React from "react";
import "./About.css";
import img1 from "/src/assets/pexels-artem-podrez-8985464 1.png";
import img2 from "/src/assets/thumb-2.jpg";
import carsBlue from "/src/assets/separator-carsblue.svg";

export default function About() {
  return (
    <div className="about flex-row" id="about">
      <div className="child child1 flex-row ">
        <img src={img1} alt="image" />
      </div>
      <div className="child child2 flex-col ">
        <div className="text flex-col gap10">
          <span className="title flex-row  gap10">
            <img src={carsBlue} />
            WHO WE ARE
          </span>
          <h2>
            Car Service repairs and <br /> maintenance Certified{" "}
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            <br /> Turpis egestas sed tempus urna et pulvinar semleko
          </p>
        </div>
        <img src={img2} alt="image" />
      </div>
    </div>
  );
}
