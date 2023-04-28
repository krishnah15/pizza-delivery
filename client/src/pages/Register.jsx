import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="img">
        <h1 className="head">Pizzalicious</h1>
      </div>

      <div className="imageHalf">
        {/* <h1>Life's Too Short for Bad Pizza, Treat Yourself with the Best!</h1> */}
      </div>

      <div className="form-container">
        <h2>Register</h2>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder="Password"
        />
        <input
          type="textarea"
          id="address"
          className="form-input"
          placeholder="Address"
        />
        <button type="button" className="btn">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Login;
