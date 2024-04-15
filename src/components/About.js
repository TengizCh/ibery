import React from "react";
import "./about.scss";

import { motion } from "framer-motion";
import Footer from "./Footer";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about_container"
    >
      <div className="about_backgrounds">
        <img
          className="about_bg"
          alt=""
          src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
        />
        <div class="rounded_bg">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
          </svg>
        </div>
      </div>
      <div className="box_container">
        <div data-aos="zoom-in" className="timelaps_left">
          <h1>2018</h1>
          <p className="timelaps_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div data-aos="zoom-in" className="timelaps_right">
          <h1>Harvest</h1>
          <p className="timelaps_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
      </div>
      <div className="about_lines">
        <p className="lines_text">
          <span style={{ color: "var(--green-color)" }}>B</span>iomo
        </p>
      </div>
      <div data-aos="fade-down" className="about_details_container">
        <img
          data-aos="flip-up"
          className="round_img"
          alt=""
          src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
        />
        <h1>About us</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,
        </p>
      </div>
      <div data-aos="fade-up" className="about_details_container_1">
        <img
          data-aos="flip-down"
          className="round_img_1"
          alt=""
          src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
        />
        <h1>Our Team</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,
        </p>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
