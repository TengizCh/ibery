import React from "react";
import "./contact.scss";

import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { BsTelephoneForward } from "react-icons/bs";

// import { AiFillFacebook } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact_container"
    >
      <div className="contact_grid">
        <div className="grid_right">
          <h2 className="contact_us">Contact us</h2>

          <p className="contact_summary">
            we are ready to communicate any time
          </p>

          <div className="details_container">
            <FaLocationDot className="contact_icon" />
            <h3 className="details_title">Address</h3>
            <p className="details_text">Georgia, Tbilisi</p>
          </div>
          <div className="details_container">
            <FiMail className="contact_icon" />
            <h3 className="details_title">Email</h3>
            <p className="details_text">Blueberry@gmail.com</p>
          </div>
          <div className="details_container">
            <BsTelephoneForward className="contact_icon" />
            <h3 className="details_title">Phone</h3>
            <p className="details_text">+995 599 999 999</p>
          </div>
          <div className="details_company">
            <img
              alt=""
              className="contact_png"
              src={require("../assets/48.png")}
            />
            <h3 className="details_title">Company</h3>
            <p className="details_text">LTD Biomo</p>
          </div>
          <div className="icons_container">
            <button>
              <img
                alt=""
                src={require("../assets/facebook.svg.png")}
                className="contact_public"
              />
            </button>
            <button>
              <img
                alt=""
                src={require("../assets/instagram.svg.png")}
                className="contact_public"
              />
            </button>
            <button>
              <img
                alt=""
                src={require("../assets/linkedin.svg.png")}
                className="contact_public"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
