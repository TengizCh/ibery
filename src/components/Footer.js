import React from "react";
import "./footer.scss";

// import { AiFillFacebook } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";

import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { BsTelephoneForward } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links">
        <p style={{ color: "var(--green-color)" }}>You can find us here</p>
        <div className="links_inner">
          <button>
            <img
              alt=""
              src={require("../assets/facebook.svg.png")}
              className="public_icon"
            />
          </button>
          <button>
            <img
              alt=""
              src={require("../assets/instagram.svg.png")}
              className="public_icon"
            />
          </button>
          <button>
            <img
              alt=""
              src={require("../assets/linkedin.svg.png")}
              className="public_icon"
            />
          </button>
        </div>
      </div>
      <div className="footer_details">
        <div className="footer_partners">
          <h2>Partners</h2>
          <div className="contact_icon_div">
            <p>partner n1</p>
          </div>
          <div className="contact_icon_div">
            <p>partner n2</p>
          </div>
          <div className="contact_icon_div">
            <p>partner n3</p>
          </div>
        </div>
        <div className="footer_contact">
          <h2>Contact</h2>
          <div className="contact_icon_div">
            <FiMail className="footer_icon" />

            <p>Blueberry@gmail.com</p>
          </div>
          <div className="contact_icon_div">
            <FaLocationDot className="footer_icon" />
            <p>Georgia, Tbilisi</p>
          </div>
          <div className="contact_icon_div">
            <BsTelephoneForward className="footer_icon" />
            <p>+995 599 999 999</p>
          </div>
        </div>
        <div className="footer_navigation">
          <h2>Navigation</h2>
          <div className="navigation_inner_grid">
            <Link className="footer_nav_links">Home</Link>
            <Link className="footer_nav_links">About</Link>
            <Link className="footer_nav_links">Projects</Link>
            <Link className="footer_nav_links">Gallery</Link>
            <Link className="footer_nav_links">Contact</Link>
          </div>
        </div>
      </div>
      <div className="footer_copy">
        <p>
          Copyright{" "}
          <span
            style={{
              color: "var(--green-color)",
              fontWeight: "900",
              fontFamily: "var(--font-lato)",
            }}
          >
            LLC{" "}
          </span>
          <span
            style={{
              color: "var(--blue-color)",
              fontWeight: "900",
              fontFamily: "var(--font-lato)",
            }}
          >
            Biomo
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
