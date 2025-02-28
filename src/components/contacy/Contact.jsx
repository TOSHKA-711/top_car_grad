import React from "react";
import "./Contact.css";

export default function ContactLocation() {
  return (
    <div className="contact section" id="contact">
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1329768206706!2d31.105137575432902!3d29.9756081749583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584ff219a68211%3A0x1de28ea81c53aedf!2sGenx%20Digital%20Solutions!5e0!3m2!1sen!2seg!4v1708509758558!5m2!1sen!2seg"
          width="500"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Genx Digital Solutions Location"
        ></iframe>
      </div>

      {/* <div className="container">
        <h2 className="rev-top">
          Contact <span> Me!</span>
        </h2>
        <form>
          <div className="input-box">
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="Email address"></input>
          </div>
          <div className="input-box">
            <input type="phone" placeholder="Mobile Number"></input>
            <input type="text" placeholder="Email Subject"></input>
          </div>
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input
            type="submit"
            value="Send Message"
            className="button rev-bot"
          ></input>
        </form>
        <div />
      </div> */}
    </div>
  );
}
