import React from "react";
import "./gallery.scss";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <div className="gallery_container">
      <div className="gallery_bg"></div>
      <h1 className="gallery_title">Gallery</h1>
      <div className="div_margin"></div>
      <div className="gallery_wrap">
        <ImageGallery
          className="gallery"
          items={images}
          showPlayButton={false}
        />
      </div>
    </div>
  );
};

export default Gallery;
