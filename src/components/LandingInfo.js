import React from "react";
import "./landingInfo.scss";
import { Link } from "react-router-dom";

const LandingInfo = () => {
  return (
    <div className="info_container">
      <div className="info_grid">
        <img
          data-aos="flip-left"
          className="info_img_1"
          alt=""
          src="https://www.canr.msu.edu/contentAsset/image/3d9f7288-96f8-4380-9ea6-16955e219c14/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80"
        />
        <div data-aos="fade-up" className="info_text_1">
          <h1>Blueberry</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur,
          </p>
          <Link to="/about" className="learn_more_1">
            Learn more
          </Link>
        </div>
        {/* <div data-aos="fade-up" className="info_text_2">
          <h1>RedBerry</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur,
          </p>
          <Link className="learn_more">Learn more</Link>
        </div>
        <img
          data-aos="flip-right"
          className="info_img"
          alt=""
          src="https://hips.hearstapps.com/hmg-prod/images/blueberries-1527711083.jpg?crop=0.667xw:1.00xh;0.202xw,0&resize=1200:*"
        /> */}
      </div>
    </div>
  );
};

export default LandingInfo;
