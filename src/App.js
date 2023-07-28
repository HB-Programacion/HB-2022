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
import Contact from "./components/Contact/Contact";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Quickly from "./components/Quickly/Quickly";
import Heineken from "./components/Heineken/Heineken";
import WorkDetails from "./components/WorkDetails/WorkDetails";

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
    <I18nextProvider i18n={i18n}>
      <div className="main">
      <Header />
          <Router>
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/about" element={<About />} />
              <Route  path="/work" element={<Work />} />
              <Route  path="/workDetails/:id" element={<WorkDetails/>} />
              <Route  path="/quickly" element={<Quickly />} />
              {/* <Route  path="/heinekenFest" element={<HeinekenFest />} />*/}
              <Route  path="/rappi" element={<Rappi />} />
              <Route  path="/umana" element={<Umana />} />
              <Route  path="/contact" element={<Contact />} />
              <Route  path="/heineken" element={<Heineken />} />
            </Routes>
          </Router>
        <Footer />
        {/* {!showButtonTop ?
          <img src={logoGift} className="logo-gift" />
        :
          <BackToTopBtn/>
        } */}
        <BackToTopBtn/>
      </div>
    </I18nextProvider>
  );
}

export default App;
