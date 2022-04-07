import React, { useState } from "react";
import "../css/note.css";

const AddNotes = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    console.log(note);
  };

  const addNoteHandler = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandNoteBox = () => {
    setExpand(true);
  };

  const backToShrink = () => {
    setExpand(false);
  };
  return (
    <div>
      <div className="main_note " onDoubleClick={backToShrink}>
        <div>
          {expand ? (
            <input
              className="input_box"
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            className="note-sub-text"
            cols="45"
            name="content"
            value={note.content}
            onChange={InputEvent}
            onClick={expandNoteBox}
            placeholder=" Write a note..."
          ></textarea>
        </div>
        {expand ? (
          <div className="add-btn">
            <button onClick={addNoteHandler} className="btn btn-warning ">
              Add
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddNotes;
