import { createContext, useContext, useReducer } from "react";

export const ArchiveContext = createContext();

const ArchiveNoteReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_ARCHIVE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export const ArchiveProvider = ({ children }) => {
  const [archiveNoteState, archivenoteDispatch] = useReducer(
    ArchiveNoteReducer,
    []
  );
  return (
    <ArchiveContext.Provider value={{ archiveNoteState, archivenoteDispatch }}>
      {children}
    </ArchiveContext.Provider>
  );
};

export function useArchiveNote() {
  return useContext(ArchiveContext);
}
