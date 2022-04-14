import { createContext, useContext, useReducer } from "react";

export const UnPinnedNotesContext = createContext();

const UnPinnedNoteReducer = (state, action) => {
  switch (action.type) {
    case "unpin":
      return [...state, action.payload];

    default:
      return state;
  }
};

export const UnPinnedNoteProvider = ({ children }) => {
  const [unPinnedNoteState, unPinnedNoteDispatch] = useReducer(
    UnPinnedNoteReducer,
    []
  );
  return (
    <UnPinnedNotesContext.Provider
      value={{ unPinnedNoteState, unPinnedNoteDispatch }}
    >
      {children}
    </UnPinnedNotesContext.Provider>
  );
};

export function useUnPinnedNote() {
  return useContext(UnPinnedNotesContext);
}
