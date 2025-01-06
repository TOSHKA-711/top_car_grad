import React, { useState } from "react";
import "./Faq.css";
import carBlue from "/src/assets/separator-carsblue.svg";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: "HOW OFTEN SHOULD I GET AN OIL CHANGE?", content: "This is the content for section 1." },
    { title: "When should I change the oil", content: "This is the content for section 2." },
    { title: "When Should I Replace Battery?", content: "This is the content for section 3." },
    { title: "When Should I check Fluid Levels", content: "This is the content for section 3." },
    { title: "When Should I Replace My Brake Pads?", content: "This is the content for section 3." },
    { title: "When Should I Get a Tire Rotation?", content: "This is the content for section 3." },
  ];

  return (
    <div className="faq">
      <span className="title flex-row gap10">
        <img src={carBlue} alt="img" />
        FAQS
      </span>
      <h2>Frequently Asked Questions</h2>
     
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => handleAccordionClick(index)}
              >
                <h4>{item.title}</h4>
                <span
                  className={`arrow ${
                    activeIndex === index ? "arrow-down" : "arrow-right"
                  }`}
                >
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

  );
}
