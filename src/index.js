import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DelNoteProvider } from "./context/DelNote-context";
import { ArchiveProvider } from "./context/archiveNote-context";
import { PinnedNoteProvider } from "./context/pinnedNote-context";
import { UnPinnedNoteProvider } from "./context/unPinnedNote-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UnPinnedNoteProvider>
        <PinnedNoteProvider>
          <ArchiveProvider>
            <DelNoteProvider>
              <App />
            </DelNoteProvider>
          </ArchiveProvider>
        </PinnedNoteProvider>
      </UnPinnedNoteProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
