import React, { useEffect } from "react";
import Login from "./component/Login";
import "./App.css";
import Next from "./comp2/Next";
import { Routes, Route } from "react-router-dom";

function App() {
  // useEffect(()=>{
  //    console.log(document.cookie)
  // },[])
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Next />} />
    </Routes>
  );
}

export default App;
