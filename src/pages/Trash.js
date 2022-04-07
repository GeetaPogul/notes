import React from "react";
import SubLink from "./SubLink";
import "../css/link.css";
import DemoNote from "./DemoNote";

const Trash = () => {

  const deleteNote = () =>{
    alert("delete btn is working")
  }
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLink />
        </div>

        <div className="slider-content">
          <h1> TRASH PAGE</h1>
          <DemoNote delnote={deleteNote} />
        </div>
      </div>
    </>
  );
};

export default Trash;
