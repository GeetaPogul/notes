import React from "react";
import "../css/link.css";
import SubLink from "./SubLink";
import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider  ">
          <SubLink />
        </div>

        <div className="slider-content container container-md container-lg">
          <Link className="nav-link align-left" to="/notes">
            <button className="btn btn-outline-warning ">
              <i className="fas fa-plus" aria-hidden="true"></i> Create a New
              Note
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Docs;
