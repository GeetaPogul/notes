import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Docs from "./Docs";
import Label from "./Label";
import Login from "./Login";
import Notes from "./Notes";
import Archive from "./Archive";
import Trash from "./Trash";
import Signup from "./Signup";



const RoutesPage = () => {
  return (
    <div>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/label" element={<Label />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default RoutesPage