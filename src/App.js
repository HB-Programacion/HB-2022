import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import HeinekenFest from "./components/HeinekenFest/HeinekenFest";
import logoGift from "../src/assets/header/logo-gift.gif"

import "./App.css";
import Rappi from "./components/Rappi/Rappi";
import Umana from "./components/Umana/Umana";
import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn";

function App() {

  const [showButtonTop, setShowButtonTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3000) {
            setShowButtonTop(true);
        } else {
            setShowButtonTop(false);
        }
        });
    }, []);

  return (
    <div className="main">
      <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/heinekenFest" element={<HeinekenFest />} />
            <Route exact path="/rappi" element={<Rappi />} />
            <Route exact path="/umana" element={<Umana />} />
          </Routes>
        </Router>
      <Footer />
      {!showButtonTop ?
        <img src={logoGift} className="logo-gift" />
      :
        <BackToTopBtn/>
      }
    </div>
  );
}

export default App;
