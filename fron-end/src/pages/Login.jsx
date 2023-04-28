import React from "react";
import "./login.css";

const Login = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="container">
      <div className="img">
        <h1 className="head">Pizzalicious</h1>
      </div>

      <div className="imageHalf">
        {/* <h1>Life's Too Short for Bad Pizza, Treat Yourself with the Best!</h1> */}
      </div>

      <div className="form-container">
        <h2 className="loginWalaHead">Login</h2>
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
        <button type="button" className="btn">
          LOGIN
        </button>
        <a href="https://www.google.com/">forgot password?</a>
        <a href="https://www.google.com/">Not a user? Register here</a>
      </div>
    </div>
  );
};

export default Login;
