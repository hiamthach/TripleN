import React from "react";
import "./styles.scss";

import { Outlet } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
