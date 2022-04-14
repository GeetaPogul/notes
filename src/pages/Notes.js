import React, { useState } from "react";
import SubLink from "./SubLink";
import "../css/link.css";
import "../css/note.css";
import AddNotes from "./AddNotes";
import DemoNote from "./DemoNote";
import { useDelNote } from "../context/DelNote-context";
import { useArchiveNote } from "../context/archiveNote-context";
import { usePinnedNote } from "../context/pinnedNote-context";
import { useUnPinnedNote } from "../context/unPinnedNote-context";
const Notes = (props) => {
  const { unPinnedNoteDispatch } = useUnPinnedNote();
  const { pinnedNoteState, pinnedNoteDispatch } = usePinnedNote();

  const [addItems, setAddItems] = useState([]);

  const { delnoteDispatch } = useDelNote();

  const { archivenoteDispatch } = useArchiveNote();

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

  const archiveNote = (id) => {
    const archivedNotes = addItems.find((item, index) => index === id);

    archivenoteDispatch({ type: "MOVE_TO_ARCHIVE", payload: archivedNotes });
    setAddItems((prevData) =>
      prevData.filter((curData, index) => {
        return index !== id;
      })
    );
  };

  const pinnedNote = (id) => {
    const isPinnedNote = addItems.find((item, index) => index === id);

    pinnedNoteDispatch({ type: "ISPINNED", payload: isPinnedNote });
    setAddItems((prev) =>
      prev.filter((curr, index) => {
        return index !== id;
      })
    );
  };

  const unpin = (id) => {
    console.log("geeta");

    const Up = addItems.find((itm, indx) => indx !== id);
    unPinnedNoteDispatch({ type: "unpin", payload: Up });
    setAddItems((prev) =>
      prev.filter((cur, index) => {
        return index === id;
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
          <h2> Pinned Notes : </h2>
          <div className="demo-parent-note">
            {pinnedNoteState.map((pinNote) => (
              <>
                <div className="demo-child-note">
                  <div className="new-note">
                    <div className="btns-end">
                      <button
                        className="btn btn-outline-warning icon-btns "
                        onClick={unpin}
                      >
                        <i className="fa fa-thumb-tack" aria-hidden="true"></i>{" "}
                      </button>
                    </div>
                    <div className="text">
                      <h3> {pinNote.title}</h3>
                      <p>{pinNote.content} </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
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
                    archiveItem={archiveNote}
                    pinnedItem={pinnedNote}
                    unpinnedItem={unpin}
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
