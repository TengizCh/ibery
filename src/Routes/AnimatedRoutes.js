import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../components/About";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import "../index.css";
import Navbar from "../components/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";

const AnimatedRoutes = () => {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
    setLoading(false);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2200 });
    setTimeout(function () {
      Aos.refresh();
    }, 400);
  }, [location]);

  return (
    <>
      {!loading ? (
        <div className="loader_container">
          <img
            alt=""
            src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
          />
          <div className="loader_inner">
            <p className="loader_title">Biomo</p>
            <p data-content="Loading..." className="spin_text">
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <>
          <AnimatePresence>
            <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default AnimatedRoutes;
