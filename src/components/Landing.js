import React from "react";
import Footer from "./Footer";
import "./landing.scss";
import LandingInfo from "./LandingInfo";

import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="landing_container">
        <img
          alt=""
          src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
        />
        <h1 className="landing_text">Ibery</h1>
        <LandingInfo />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Landing;
