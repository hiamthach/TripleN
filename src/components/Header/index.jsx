import React, { useState } from "react";
import "./styles.scss";

import { useNavigate, useLocation } from "react-router-dom";

//Components
import Logo from "../Logo";
import CusSwitch from "../CusSwitch";
import CusDrawer from "../CusDrawer";

// antd
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerVisible, setHeaderVisible] = useState(false);

  const onChange = (key) => {
    if (key === "home") {
      navigate("/");
    } else if (key === "contacts") {
      navigate("/contacts");
    } else {
      navigate(`${key}`);
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-nav">
        <Tabs
          defaultActiveKey="home"
          onChange={onChange}
          activeKey={
            location.pathname === "/" ? "home" : location.pathname.slice(1)
          }
        >
          <TabPane tab="Home" key="home"></TabPane>
          <TabPane tab="Our Story" key="our-story"></TabPane>
          <TabPane tab="Menu" key="menu"></TabPane>
          <TabPane tab="Contacts" key="contacts"></TabPane>
        </Tabs>
      </div>
      <div
        className="header-bar"
        onClick={() => {
          setHeaderVisible(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="header-switch">
        <CusSwitch />
      </div>
      <CusDrawer visible={headerVisible} setVisible={setHeaderVisible} />
    </header>
  );
};

export default Header;
