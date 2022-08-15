import React from "react";

import "./styles.scss";

import ArrowDown from "../../assets/icons/arrow-down.png";

const Banner = ({ children, where }) => {
  return (
    <div className={`banner ${where}`}>
      <div className="banner-container">{children}</div>

      <div className="banner-arrow">
        <img src={ArrowDown} alt="" />
      </div>
    </div>
  );
};

export default Banner;
