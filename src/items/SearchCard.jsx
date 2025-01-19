import React, { useContext } from "react";
import "./SearchCard.css";
import { useNavigate } from "react-router-dom";

import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaGasPump } from "react-icons/fa";
import { MdOutlineControlCamera } from "react-icons/md";
import { MyContext } from "../store/ContextApi";

export default function SearchCard({ image, price, brand, condition, color }) {
  const { setDetailsData } = useContext(MyContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/carInformation");
    setDetailsData({ image, price, brand, condition, color });
  };

  // صورة افتراضية عند غياب الصورة
  const defaultImage = "https://via.placeholder.com/200x150?text=No+Image";

  return (
    <div className="search-card flex-col" onClick={handleCardClick}>
      <img
        src={
          image
            ? image.startsWith("http")
              ? image // رابط خارجي للصورة
              : `http://localhost:3000${image}` // مسار صورة تم رفعها
            : defaultImage // صورة افتراضية
        }
        alt={brand || "Car"}
        
      />

      <div className="text flex-col">
        <h2>{brand || "Unknown Brand"}</h2>
        <div className="details flex-row flex-center">
          <span className="info flex-col flex-center">
            <RxCounterClockwiseClock />
            {condition || "Unknown"}
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
