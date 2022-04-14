import { createContext, useContext, useReducer } from "react";

export const DelNoteContext = createContext();

const DelNoteReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_TRASH":
      return [...state, action.payload];

    default:
      return state;
  }
};

export const DelNoteProvider = ({ children }) => {
  const [delnoteState, delnoteDispatch] = useReducer(DelNoteReducer, []);
  return (
    <DelNoteContext.Provider value={{ delnoteState, delnoteDispatch }}>
      {children}
    </DelNoteContext.Provider>
  );
};
export function useDelNote() {
  return useContext(DelNoteContext);
}
