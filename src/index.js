import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import { DelNoteProvider } from "./context/DelNote-context";

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <DelNoteProvider>
     <App />
     </DelNoteProvider>
     
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
