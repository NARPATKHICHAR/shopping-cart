import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import { Routes, Route } from "react-router-dom";

export default function Next() {
  const addDefaultPositioning = (Component) => {
    return (
      <div style={{ position: "absolute", top: "4em", paddingLeft: "1.2em" }}>
        <Component />
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={addDefaultPositioning(Home)} />
        <Route path="/about" element={addDefaultPositioning(About)} />
        <Route path="/blog" element={addDefaultPositioning(Blog)} />
      </Routes>
    </div>
  );
}
