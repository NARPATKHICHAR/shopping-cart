import React, { useState } from "react";
import { Link } from "react-router-dom";
import { typeNames } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");

  const userName = (el) => {
    // console.log("userName", el);
    setUserId(el);
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form>
            <div className="input-container">
              <label>Username</label>
              <input
                type="text"
                name="uname"
                required
                onChange={(e) => {
                  userName(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <Link
                className="submit"
                type="submit"
                to="/"
                onClick={() => dispatch(typeNames(userId))}
              >
                submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
