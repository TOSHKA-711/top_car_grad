import React, { useContext, useState } from "react";
import "./Hero.css";
import heroImg from "/src/assets/tesla.png";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../../../store/ContextApi";

export default function Hero({ height, BannersImg }) {
  const { setFetchedData } = useContext(MyContext);
  const [cars, setCars] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const handleChangeCars = (event) => {
    setCars(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/search?brand=${brand}&condition=${cars}&price=${price}`
      );
      setFetchedData(response.data);
      // console.log("results => ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="search-hero flex-col" style={{ height: `${height}` }}>
      <p>Find cars for sale and for rent near you</p>
      <h1>Find Your Dream Car</h1>
      <div className="search-bar flex-row flex-center ">
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={cars}
              onChange={handleChangeCars}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="">
                <em>Cars</em>
              </MenuItem>
              <MenuItem value={"New"}>New</MenuItem>
              <MenuItem value={"Used"}>Used</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={brand}
              onChange={handleChangeBrand}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="">
                <em>Brand</em>
              </MenuItem>
              <MenuItem value={"Audi"}>Audi</MenuItem>
              <MenuItem value={"BMW"}>BMW</MenuItem>
              <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
              <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={price}
              onChange={handleChangePrice}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="">
                <em>Price</em>
              </MenuItem>
              <MenuItem value={10000}>10000$</MenuItem>
              <MenuItem value={20000}>20000$</MenuItem>
              <MenuItem value={50000}>50000$</MenuItem>
              <MenuItem value={100000}>100000$</MenuItem>
              <MenuItem value={150000}>150000$</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Link
          to="/searchResults"
          className="search icon flex-row flex-center"
          onClick={handleSearch}
        >
          <CiSearch />
        </Link>
      </div>

      {BannersImg && (
        <img src={heroImg} alt="tesla image" className="search-img" />
      )}
    </div>
  );
}
