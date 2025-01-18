import React, { useContext } from "react";
import "./SearchCard.css"


import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaGasPump } from "react-icons/fa";
import { MdOutlineControlCamera } from "react-icons/md";
import { MyContext } from "../store/ContextApi";

export default function SearchCard({image , price , brand , condition}) {
    const { fetchedData, setFetchedData, detailsData, setDetailsData } =
    useContext(MyContext);

    
    const handleCardClick =()=>{
        window.location="/carInformation" ;
        setDetailsData({image , price , brand , condition})
    }

  return (
    <div className="search-card flex-col" onClick={handleCardClick}>
      <img src={image} />
      <div className="text flex-col">
        <h2>{brand}</h2>
        <div className="details flex-row flex-center">
          <span className="info flex-col flex-center">
            <RxCounterClockwiseClock />
            {condition}
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
          <h2>{price}$</h2>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
}
