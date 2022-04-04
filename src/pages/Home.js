import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
const Home = () => {
  return (
    <>
      {/* <h1> Home Page</h1> */}
      <div className="main-content content">
        <div className="main-heading"> Create.</div>
        <div> Notes of your choices.</div>
      </div>
      <div>
        <p className="sub-content content">
          This is a digital notebook that blends notes, tasks, and a daily
          planner into one app.
        </p>
      </div>{" "}
      <br />
      <Link className="nav-link align-center" to="/docs">
        <button className="btn btn-outline-warning "> Take a Note </button>
        <i className="fa fa-arrow-right right-arrow" aria-hidden="true"></i>
      </Link>
    </>
  );
};

export default Home;
