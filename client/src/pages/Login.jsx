import React, { useState } from "react";
import "./login.css";
import { userReq } from "../reqMethods";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/userRedux";

const Login = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (Email && Password) {
      const loginUser = {
        email: Email,
        password: Password,
      };
      userReq
        .post("/user/login", loginUser)
        .then(async (res) => {
          dispatch(logIn(res.data));
        })
        .catch(() => {
          toast.error("Something went wrong!", {
            duration: 2000,
            style: {
              border: "2.5px solid #D62828",
            },
          });
        });
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="container">
      <div className="img">
        <h1 className="head">Pizzalicious</h1>
      </div>

      <div className="imageHalf"></div>

      <div className="form-container">
        <h2 className="loginWalaHead">Login</h2>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="loginAndErr">
          <button type="button" className="btn" onClick={handleLogin}>
            LOGIN
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </div>

        <a href="https://www.google.com/">forgot password?</a>
        <a href="https://www.google.com/">Not a user? Register here</a>
      </div>
    </div>
  );
};

export default Login;
