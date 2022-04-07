import React, { useState } from "react";
import SubLink from "./SubLink";
import "../css/link.css";
import "../css/note.css";
import AddNotes from "./AddNotes";
import DemoNote from "./DemoNote";

const Notes = () => {
  const [addItems, setAddItems] = useState([]);

  const addNewNote = (note) => {
    setAddItems((previousData) => {
      return [...previousData, note];
    });

    console.log(note);
  };
  const onDeleteNote = (id) => {
    console.log("deltete note");
    setAddItems((olddata) =>
      olddata.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <SubLink />
        </div>

        <div className="slider-content">
          <AddNotes passNote={addNewNote} className="create-note-div" />
          <br />
          <div className="demo-parent-note">
            {addItems.map((value, index) => {
              return (
                <div className="demo-child-note">
                  <DemoNote
                    key={index}
                    id={index}
                    title={value.title}
                    content={value.content}
                    deleteItem={onDeleteNote}
                  />
                </div>
              );
            })}
          </div>{" "}
          <br /> <br />
        </div>
      </div>
    </>
  );
};

export default Notes;
