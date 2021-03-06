import React from "react";
import "../css/nav.css";

import { Link } from "react-router-dom";
// import Home from "./Home";
// import Docs from "./Docs";
// import Label from "./Label";
// import Login from "./Login";
// import Notes from "./Notes";
// import Archive from "./Archive";
// import Trash from "./Trash";
// import Signup from "./Signup";
import RoutesPage from "./RoutesPage";

const Nav = () => {
  return (
    <div>
      <nav className="navigate ">
        <div className="navbar navbar-expand-lg navbar-light bg-warning nav-left">
          <Link className="nav-link " to="/home">
            <i className="fa fa-star star-logo" aria-hidden="true"></i>
            Star Notes
          </Link>
        </div>

        <div className="navbar navbar-expand-lg navbar-light bg-warning justify-content-end nav-right">
          <button className="nav-link btn">
            <i className="fa fa-moon-o"></i>
          </button>

          <Link className="nav-link " to="/home">
            <i
              className="fa fa-home"
              aria-hidden="true"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Home"
            ></i>
          </Link>

          <Link className="nav-link  " to="/docs">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
          </Link>

          <Link className="nav-link  " to="/login">
            <i className="fa fa-user" aria-hidden="true"></i>
          </Link>
        </div>
      </nav>
     

     <RoutesPage />
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/label" element={<Label />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </div>
  );
};

export default Nav;
