import React from "react";
import "../css/link.css";
import { Link } from "react-router-dom";

const SubLink = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <Link className="sub-links nav-link active-link" to="/notes">
            Notes
          </Link>
          <Link className="sub-links nav-link" to="/label">
            Label
          </Link>
          <Link className="sub-links nav-link" to="/archive">
            Archive
          </Link>
          <Link className="sub-links nav-link" to="/trash">
            <i className="fas fa-hear"></i> Trash
          </Link>
        </div>

        <div className="slider-content"></div>
      </div>
    </>
  );
};

export default SubLink;
