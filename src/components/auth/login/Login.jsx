import React, { useState } from "react";
import "./Login.css";
import logo from "/src/assets/logo-2.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
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
      const response = await axios.post(`http://localhost:3000/login`, user);
      console.log("results => ", response.data);
      window.location="/home"
    } catch (error) {
      console.error("Error fetching data:", error);
      window.alert(error.response.data.message)
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
          placeholder="********"
        />
        <button className="transition " onClick={handleSubmit}>
          Login
        </button>
        <Link to={"/register"} className="register">
          Create Account? <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
