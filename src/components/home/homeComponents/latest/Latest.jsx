import React from "react";
import "./Latest.css";
import carsBlue from "/src/assets/separator-carsblue.svg";
import img from "/src/assets/pexels-cottonbro-studio-4489734 2.png";
import frame from "/src/assets/Frame 99.png"


export default function Latest() {
  return (
    <div className="latest flex-row">
      <img className="latest-img" src={img} alt="img" />
      <div className="latest-card flex-col">
        <div className="card-text flex-col gap5">
          <span className="title flex-row gap10">
            <img src={carsBlue} />
            our latest work
          </span>
          <h2>
            Subaru WRX STI <br /> Performance Parts
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
            elit tellus, luctus nec
          </p>
          <img src={frame}/>
        </div>
        <button>view case study</button>
      </div>
    </div>
  );
}
