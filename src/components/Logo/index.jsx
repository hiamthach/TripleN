import React from "react";

import { Link } from "react-router-dom";

import "./styles.scss";
import LogoGreen from "../../assets/img/logo/logo-green.png";
import LogoYellow from "../../assets/img/logo/logo-yellow.png";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={LogoGreen} alt="Logo" />
    </Link>
  );
};

export default Logo;
