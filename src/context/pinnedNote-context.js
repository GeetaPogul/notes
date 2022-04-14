import { createContext, useContext, useReducer } from "react";

export const PinnedNotesContext = createContext();

const PinnedNoteReducer = (state, action) => {
  switch (action.type) {
    case "ISPINNED":
      return [...state, action.payload];

    case "unpinned":
      return [...state];

    default:
      return state;
  }
};

export const PinnedNoteProvider = ({ children }) => {
  const [pinnedNoteState, pinnedNoteDispatch] = useReducer(
    PinnedNoteReducer,
    []
  );
  return (
    <PinnedNotesContext.Provider
      value={{ pinnedNoteState, pinnedNoteDispatch }}
    >
      {children}
    </PinnedNotesContext.Provider>
  );
};

export function usePinnedNote() {
  return useContext(PinnedNotesContext);
}
