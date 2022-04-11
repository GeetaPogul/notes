import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DelNoteProvider } from "./context/DelNote-context";
import { ArchiveProvider } from "./context/archiveNote-context";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ArchiveProvider>
        <DelNoteProvider>
          <App />
        </DelNoteProvider>
      </ArchiveProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
