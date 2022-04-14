import React from "react";
import SubLink from "./SubLink";
import "../css/link.css";
import { useArchiveNote } from "../context/archiveNote-context";

const Archive = () => {
  const { archiveNoteState } = useArchiveNote();

  const d = new Date();

  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  const dateStr = date + "/" + month + "/" + year;

  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLink />
        </div>

        <div className="slider-content">
          <h2> Archive Notes</h2> <br />
          <div className="demo-parent-note">
            {archiveNoteState.map((note) => (
              <div className="new-note trash-notes">
                <div className="text">
                  <h3> {note.title}</h3>
                  <p>{note.content}</p>
                  <span className="date-div"> Date : {dateStr} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Archive;
