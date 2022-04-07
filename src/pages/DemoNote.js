import React from "react";
import "../css/note.css";


const DemoNote = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);

    console.log("note is deleted")
  };
  return (
    <>
      <div className="note-container">
        <div className="new-note">
          <div className="text">
            <div className="btns-end"> 
            <button className="btn btn-outline-warning icon-btns ">  <i className="fa fa-thumb-tack"  aria-hidden="true"></i> </button>
            </div>
            <h4>{props.title}</h4>
            <br />
            <p> {props.content}</p>
          </div>
          <div className="btns-end">
            <button className="btn btn-outline-warning btn-archive icon-btns"> 
               <i className="material-icons">archive</i></button> 
          <button
            onClick={deleteNote}
            className="btn btn-outline-warning icon-btns"
          > 
            <i className="fas fa-trash" aria-hidden="true"></i>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoNote;
