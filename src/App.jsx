import React from "react";
import About from "./component/About";
import Home from "./component/Home";
import Gallery from "./component/Gallery";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
