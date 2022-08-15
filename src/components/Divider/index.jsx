import React from "react";

import "./styles.scss";

const Divider = ({ color, direction }) => {
  return <div className={`divider ${color} divider-${direction}`}></div>;
};

export default Divider;
