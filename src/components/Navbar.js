import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";

import { MdLanguage } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [bg, setBg] = useState("nav_container");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [active, setActive] = useState(false);

  const showNavBar = () => {
    setActive(!active);
  };
  const removeNavBar = () => {
    setActive(!active);
  };

  const addBgColor = () => {
    if (window.scrollY >= 1) {
      setBg("nav_container navbar_With_Bg");
    } else {
      setBg("nav_container");
    }
  };

  window.addEventListener("scroll", addBgColor);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={bg}>
      <div className="inner_container">
        <div className="nav_logo_container">
          <div className="main_logo"></div>
        </div>
        <button>
          <HiOutlineMenuAlt3 onClick={showNavBar} className="menu_icon" />
        </button>
        <div
          className={
            active ? "nav_links_container showNavbar" : "nav_links_container"
          }
        >
          <Link onClick={removeNavBar} to="/" className="link">
            Home
          </Link>
          <Link onClick={removeNavBar} to="/about" className="link">
            About
          </Link>
          <Link onClick={removeNavBar} to="/projects" className="link">
            Projects
          </Link>
          <Link onClick={removeNavBar} to="/gallery" className="link">
            Gallery
          </Link>
          <Link onClick={removeNavBar} to="/contact" className="link">
            Contact
          </Link>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ padding: "0px" }}
            >
              <MdLanguage className="language_icon" />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem className="menu" onClick={handleClose}>
                ქართული
                <img
                  alt=""
                  className="flag_icon"
                  src={require("../assets/georgia.png")}
                />
              </MenuItem>
              <MenuItem
                style={{ fontFamily: "var(--font-lato)" }}
                className="menu"
                onClick={handleClose}
              >
                English
                <img
                  alt=""
                  className="flag_icon"
                  src={require("../assets/united-kingdom.png")}
                />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
