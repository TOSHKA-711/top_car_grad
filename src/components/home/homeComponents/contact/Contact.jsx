import React from "react";
import "./Contact.css";
import carsWhite from "/src/assets/separator-carswhite.svg";
import img from "/src/assets/Group 166.png";
import img2 from "/src/assets/Group 171.png";

export default function Contact() {
  return (
    <div className="contact flex-row">
      <img className="contact-img" src={img} alt="img" />
      <div className="contact-card flex-col">
        <div className="card-text flex-col gap10">
     <h2>HOW CAN WE HELP</h2>
     <input type="text" placeholder="your name"/>
     <input type="text" placeholder="phone number"/>
     <input type="email" placeholder="email address"/>
     <textarea type="text" placeholder="Your issue"/>
        </div>
        <button>send are message</button>
      </div>
      <div className="contact-text flex-col gap10">
        <span className="title flex-row gap10">
          <img src={carsWhite} alt="img" />
          MAKE APPOINTMENT
        </span>
        <h2>
          Trust Our Service to Get <br /> You Back on the Road!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar
        </p>
        <img src={img2} alt="img" className="location"/>
      </div>
    </div>
  );
}
