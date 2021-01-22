import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //firebase registration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created a new user
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to our Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
