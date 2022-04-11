import React from "react";
import SubLink from "./SubLink";
import "../css/link.css";

const Label = () => {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLink />
        </div>

        <div className="slider-content">
          <h1> Label Notes</h1>
        </div>
      </div>
    </>
  );
};

export default Label;
