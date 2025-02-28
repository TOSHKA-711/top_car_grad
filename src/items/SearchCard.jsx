import React, { useContext } from "react";
import "./SearchCard.css";
import { useNavigate } from "react-router-dom";

import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaGasPump } from "react-icons/fa";
import { MdOutlineControlCamera } from "react-icons/md";
import { MdModelTraining } from "react-icons/md";
import { MyContext } from "../store/ContextApi";

export default function SearchCard({
  image,
  price,
  brand,
  condition,
  color,
  model,
}) {
  const { setDetailsData } = useContext(MyContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/carInformation");
    setDetailsData({ image, price, brand, condition, color, model });
  };

  console.log(model);

  return (
    <div className="search-card flex-col" onClick={handleCardClick}>
      <img
        src={
          image
            ? `http://localhost:3000${image}`
            : "https://via.placeholder.com/200x150?text=No+Image"
        }
        alt={brand || "Car"}
        // onError={(e) => {
        //   e.target.onerror = null;
        //   e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
        // }}
      />

      <div className="text flex-col">
        <h2>
          {brand || "Unknown Brand"} {model || ""}
        </h2>

        <div className="details flex-row flex-center">
          <span className="info flex-col flex-center">
            <RxCounterClockwiseClock />
            {condition || "Unknown"}
          </span>
          <span className="info flex-col flex-center">
            <MdModelTraining />
            {model || ""}
          </span>
          <span className="info flex-col flex-center">
            <FaGasPump />
            Petrol
          </span>
          <span className="info flex-col flex-center">
            <MdOutlineControlCamera />
            Automatic
          </span>
        </div>
        <div className="price flex-row flex-center">
          <h2>{price ? `${price}$` : "N/A"}</h2>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
}
