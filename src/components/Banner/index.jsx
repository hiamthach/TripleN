import React, { useRef, useEffect, useState } from "react";

import "./styles.scss";

import ArrowDown from "../../assets/icons/arrow-down.png";

const Banner = ({ children, where }) => {
  const bannerRef = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    console.log(bannerRef.current.clientHeight);
    setHeight(bannerRef.current.clientHeight);
  }, []);

  const handleScroll = () => {
    console.log(height);
    window.scrollTo(0, height);
  };

  return (
    <div className={`banner ${where}`} ref={bannerRef}>
      <div className="banner-container">{children}</div>

      <div className="banner-arrow" onClick={handleScroll}>
        <img src={ArrowDown} alt="" />
      </div>
    </div>
  );
};

export default Banner;
