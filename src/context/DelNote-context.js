import { createContext, useContext, useReducer, useState } from "react";

export const DelNoteContext = createContext();

const DelNoteReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_TRASH":
      return [...state, action.payload];

    case "REMOVE_FROM_TRASH":
      return state.filter((delItem) => delItem.id !== action.payload.id);

    default:
      return state;
  }
};

export const DelNoteProvider = ({ children }) => {
  const [delNote, setDelNote] = useState(2);

  const [delnoteState, delnoteDispatch] = useReducer(DelNoteReducer, []);
  return (
    <DelNoteContext.Provider
      value={{ delNote, setDelNote, delnoteState, delnoteDispatch }}
    >
      {children}
    </DelNoteContext.Provider>
  );
};
export function useDelNote() {
  return useContext(DelNoteContext);
}

//  {useDelNote, DelNoteProvider}
