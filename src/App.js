import React from "react";
import Navbar from "./Component/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Add from "./Component/Add";
import Delete from "./Component/Delete";
import Edit from "./Component/Edit";
import View from "./Component/View";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="abs">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
