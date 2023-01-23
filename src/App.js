import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import HeinekenFest from "./components/HeinekenFest/HeinekenFest";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/heinekenFest" element={<HeinekenFest />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
