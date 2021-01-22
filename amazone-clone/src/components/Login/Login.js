import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="login__logo"
          src="https://i.pinimg.com/474x/5e/9e/10/5e9e1001fa44ea14ff6fefab01b209bb.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>Email</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button>Sign In</button>
        </form>

        <p>
          By signing-in you agree to our Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
