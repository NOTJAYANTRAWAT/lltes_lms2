import React from "react";

const BackgroundImage = () => {
  return (
    <div style={{
      position: "absolute",
      height:100,
      width:100,
      top: 110,
      left: 10,
      right: 10,
      bottom: 0,
      backgroundImage: `url('/bgimage.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1
    }}>
    </div>
  );
};

export default BackgroundImage;