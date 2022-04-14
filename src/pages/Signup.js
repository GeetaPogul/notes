import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css"
const Signup = () => {
  return (
    <>
      SIGN UP Page
      <div className="page-container"> 
      <form>
        <label className="input-label">
          Name
          <span className="star"> *</span>
        </label>
        <br />
        <input
          className="input-box"
          type="text"
          placeholder="johndoe"
        /> <br /> <br />
        <label className="input-label">
          Email Address
          <span className="star"> *</span>
        </label>
        <br />
        <input
          className="input-box"
          type="email"
          placeholder="johndoe@example.com"
        />
        <br /> <br />
        <label className="input-label">
          Password <span className="star"> * </span>
        </label>
        <br />
        <input className="input-box" type="password" placeholder="********" />
        <br /> <br />
        <label className="input-label">
          Re-enter Password <span className="star"> * </span>
        </label>
        <br />
        <input className="input-box" type="password" placeholder="********" />
        <br />
        
        <br />
        <Link to="/Login ">
          <button className=" btn btn-login "> Create account</button>
        </Link>
        <br /> <br />
        <div className=" bottom-div ">
          <Link to="/Login ">
            Already have an account
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
      </form>

      </div>
    </>
  );
};

export default Signup;
