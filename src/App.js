import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./conponents/Login";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
