import React from "react";

import "./styles.scss";
import { Drawer } from "antd";

import { Link } from "react-router-dom";

import Logo from "../Logo";
import CusSwitch from "../CusSwitch";

const CusDrawer = ({ visible, setVisible, children }) => {
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        className="header-drawer"
      >
        <Logo />
        <div className="header-drawer__link">
          <Link to="/" onClick={onClose}>
            Home
          </Link>
          <Link to="/our-story" onClick={onClose}>
            Our Story
          </Link>
          <Link to="/menu" onClick={onClose}>
            Menu
          </Link>
          <Link to="/contacts" onClick={onClose}>
            Contacts
          </Link>
        </div>
        <CusSwitch />
      </Drawer>
    </>
  );
};

export default CusDrawer;
