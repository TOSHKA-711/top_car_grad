import React, { useState } from "react";
import "./Register.css";
import logo from "/src/assets/logo-2.png";
import axios from "axios";

// import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/register`, user);
      console.log("results => ", response.data);
     window.alert("results => ", response.data.message);
      window.location = "/";
    } catch (error) {
      console.error("Error fetching data:", error);
      window.alert(error.response.data.message);
    }
  };
  return (
    <div className="login flex-row flex-center">
      <div className="form flex-col flex-center">
        <img src={logo} alt="logo" className="logo" />
        <input
          name="email"
          value={user.email}
          onChange={handleInputChange}
          type="text"
          placeholder="email address"
        />
        <input
          name="password"
          value={user.password}
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        <input type="password" placeholder="confirm password" />
        <button className="transition " onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
