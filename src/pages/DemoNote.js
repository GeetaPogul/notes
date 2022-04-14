import React, { useState } from "react";
// import { useDelNote } from "../context/DelNote-context";
import "../css/note.css";

const DemoNote = (props) => {
  const [listOfNotes, setListOfNotes] = useState({ notes: [] });

  // const toggleBackgroundColor = (id, bgColor) => {
  //   setListOfNotes((prev) => {
  //     return {
  //       ...prev,
  //       notes: prev.notes.map((note) => {
  //         if (note.id === id) {
  //           return {
  //             ...note,
  //             bgColor: bgColor === note.bgColor ? "white" : bgColor,
  //           };
  //         }
  //         return note;
  //       }),
  //     };
  //   });
  // };

  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  const archiveNote = () => {
    props.archiveItem(props.id);
  };

  const isPinnedNote = () => {
    props.pinnedItem(props.id);
  };

  const d = new Date();
  // console.log(d);

  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  const dateStr = date + "/" + month + "/" + year;
  // console.log(dateStr);

  // const backgroundColor = () => {
  //   console.log("red");
  // };

  const moveToRedColor = () => {
    document.getElementById("note-box").style.backgroundColor = "#7fa19e";
  };

  const moveToGreenColor = () => {
    document.getElementById("note-box").style.backgroundColor = "#9cb579";
  };

  const moveToGreyColor = () => {
    document.getElementById("note-box").style.backgroundColor = "grey";
  };

  const moveToOrangeColor = () => {
    document.getElementById("note-box").style.backgroundColor = "#548278";
  };

  return (
    <>
      <div className="note-container">
        <div className="new-note" id="note-box">
          <div className="text">
            <div className="top-btns">
              <div className="colors-btns-bar">
                <label>
                  <input
                    type="button"
                    name="button"
                    className="color-btn red"
                    onClick={moveToRedColor}
                  ></input>
                </label>

                <label>
                  <input
                    type="button"
                    name="button"
                    className="color-btn green"
                    onClick={moveToGreenColor}
                  ></input>
                </label>

                <label>
                  <input
                    type="button"
                    name="button"
                    className="color-btn grey"
                    onClick={moveToGreyColor}
                  ></input>
                </label>

                <label>
                  <input
                    type="button"
                    name="button"
                    className="color-btn orange"
                    onClick={moveToOrangeColor}
                  ></input>
                </label>
              </div>

              <div className="pinned-btn">
                <button
                  className="btn btn-outline-warning icon-btns "
                  onClick={isPinnedNote}
                >
                  <i className="fa fa-thumb-tack" aria-hidden="true"></i>{" "}
                </button>
              </div>
            </div>
            <h4>{props.title}</h4>
            <br />
            <p> {props.content}</p>
          </div>

          <div className="btns-end">
            <span className="date-div"> Date : {dateStr}</span>
            <button
              onClick={archiveNote}
              className="btn btn-outline-warning btn-archive icon-btns"
            >
              <i className="material-icons">archive</i>
            </button>
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
