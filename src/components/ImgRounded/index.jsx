import React from "react";
import "./styles.scss";

const ImgRounded = ({ image, size }) => {
  return (
    <div className="img-rounded">
      <img src={image} alt="" />
    </div>
  );
};

export default ImgRounded;
