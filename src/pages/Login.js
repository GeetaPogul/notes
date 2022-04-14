import "../css/note.css";
import "../css/login.css";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2 className="heading_top"> Login Page </h2>

      <div className="page-container">
        <form>
          <label className="input-label">
            Email Address <span className="star"> *</span>
          </label>
          <br />
          <input
            className="input-box"
            type="email"
            placeholder="johndoe@example.com"
          />
          <br />
          <br />
          <label className="input-label">
            Password <span className="star"> * </span>
          </label>
          <br />
          <input className="input-box" type="password" placeholder="********" />
          <br />
          <br />
          <div className="div-ch-a">
            <input type="checkbox" />
            <label> Remember me</label>

            <a className="forget-pass a-blue-color" href="../Files/index.html">
              Forget Password?
            </a>
          </div>
          <br /> <br />
          <div className="btn-bar">
            <Link to="/docs ">
              <button className="btn-login btns"> Login</button>
            </Link>
            <br />
            <Link to="/signup ">
              Create new account <i className="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
          <br />
          <div className="bottom-div"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
