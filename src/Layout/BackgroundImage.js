import React from "react";

const BackgroundImage = ({ opacity, image }) => {
  return (
    <div
      className="background-image"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: opacity,
      }}
    >
      <img src={image} alt="Background image" />
    </div>
  );
};

export default BackgroundImage;
