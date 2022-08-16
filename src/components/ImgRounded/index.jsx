import React from "react";
import "./styles.scss";

const ImgRounded = ({ image, size }) => {
  return (
    <div className="img-rounded" style={{ width: size, height: size }}>
      <img src={image} alt="" />
    </div>
  );
};

export default ImgRounded;
