import React, { useState } from "react";
import SubLink from "./SubLink";
import "../css/link.css";
import "../css/note.css";
import AddNotes from "./AddNotes";
import DemoNote from "./DemoNote";
import { useDelNote } from "../context/DelNote-context";

const Notes = () => {
  const [addItems, setAddItems] = useState([]);

  const { delnoteDispatch } = useDelNote();

  const addNewNote = (note) => {
    setAddItems((previousData) => {
      return [...previousData, note];
    });
  };

  const onDeleteNote = (id) => {
    const deletedNote = addItems.find((item, index) => index === id);

    delnoteDispatch({ type: "MOVE_TO_TRASH", payload: deletedNote });
    setAddItems((olddata) =>
      olddata.filter((currData, index) => {
        return index !== id;
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
          <h2 className="h2"> All Notes :</h2>
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
          </div>
          <br /> <br />
        </div>
      </div>
    </>
  );
};

export default Notes;
