import React from "react";
import SubLink from "./SubLink";
import "../css/link.css";
import "../css/note.css";
import { useDelNote } from "../context/DelNote-context";

const Trash = () => {
  const { delnoteState } = useDelNote();

  const d = new Date();

  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  const dateStr = date + "/" + month + "/" + year;
  console.log(dateStr);
  console.log(delnoteState);
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLink />
        </div>

        <div className="slider-content">
          <h2> Deleted Notes </h2>

          <div className="demo-parent-note">
            {delnoteState.map((note) => (
              <div className="new-note trash-notes">
                <div className="text">
                  <h3> {note.title}</h3>
                  <p> {note.content}</p>
                  <span className="date-div"> Date : {dateStr}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trash;
