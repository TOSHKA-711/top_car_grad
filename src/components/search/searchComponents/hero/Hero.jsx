import React, { useState } from "react";
import "./Hero.css";
import heroImg from "/src/assets/tesla.png";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CiSearch } from "react-icons/ci";

export default function Hero() {
  const [age, setAge] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="search-hero flex-col  ">
      <p>Find cars for sale and for rent near you</p>
      <h1>Find Your Dream Car</h1>
      <div className="search-bar flex-row flex-center ">
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
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
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
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
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
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
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="search icon flex-row flex-center" onClick={() => setIsVisible(!isVisible)}>
          <CiSearch />
        </div>
      </div>
      <img src={heroImg} alt="tesla image" className="search-img"/>
    </div>
  );
}
