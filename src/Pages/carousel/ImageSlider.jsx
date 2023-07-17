import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://www.pngwing.com/en/free-png-magql/download",
  },
  {
    url: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1618247130379-980b9fe0df04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "525px",
  backgroundSize: "cover",
};
const spanStyle = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000",
};

const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
              <span style={{ spanStyle }}>{image.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
      '' ""
    </div>
  );
};

export default ImageSlider;
