import React from "react";
import "./CarInformation.css";
import Most from "../search/searchComponents/most/Most"

// icons
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaGasPump } from "react-icons/fa";
import { MdOutlineControlCamera } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiMoney } from "react-icons/tfi";
import { FaCar } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { TbEngineOff } from "react-icons/tb";

// use context
import { useContext } from "react";
import { MyContext } from "../../store/ContextApi";

export default function CarInformation() {
  const { detailsData } = useContext(MyContext);
  console.log(detailsData);

  return (
    <>
  
    <div className="car-information flex-col gap35">
      {/* header  */}
      <div className="header flex-col">
        <h1>{detailsData.brand}</h1>
        <p>Luxury SUV for sale</p>
        <div className="icons flex-row gap10">
          <span className="flex-row gap5 flex-center ">
            <SlCalender />
            2022
          </span>
          <span className="flex-row gap5 flex-center ">
            <RxCounterClockwiseClock />
            18000 K/M
          </span>
          <span className="flex-row gap5 flex-center ">
            <FaGasPump />
            Petrol
          </span>
          <span className="flex-row gap5 flex-center ">
            <MdOutlineControlCamera />
            Automatic
          </span>
        </div>
      </div>
      {/* body  */}

      <div className="info-body flex-row gap20">
        <img src={detailsData.image}/>
        <div className="details flex-col gap20">
          {/* price  */}
          <div className="price flex-col ">
            <p>Our Price</p>
            <h1>{detailsData.price}$</h1>
            <button className="flex-row flex-center gap5 ">
              {" "}
              <TfiMoney /> BUY
            </button>
          </div>
          {/* car details  */}
          <div className="specifications flex-col flex-center gap15">
            <div className="child flex-row">
              <span className=" flex-row flex-center gap5">
                <FaCar className="icon"/>
                Category
              </span>
              <span>{detailsData.brand}</span>
            </div>
            <div className="child flex-row">
              <span className=" flex-row flex-center gap5">
                <IoMdColorPalette className="icon"/>
                Color
              </span>
              <span>{detailsData.color}</span>
            </div>
            <div className="child flex-row">
              <span className=" flex-row flex-center gap5">
               <RxCounterClockwiseClock className="icon"/>
                Condition
              </span>
              <span>{detailsData.condition}</span>
            </div>
            <div className="child flex-row">
              <span className=" flex-row flex-center gap5">
                <TbEngineOff className="icon"/>
                Engine Size
              </span>
              <span>2.0 L</span>
            </div>
        
          </div>
        </div>
      </div>
    </div>
    <Most/>
    </>
  );
}
