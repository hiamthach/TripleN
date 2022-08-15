import React, { useRef, useEffect } from "react";
import "./styles.scss";

import { Outlet } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTopBtn from "../components/ScrollTopBtn";

const Layout = () => {
  const topBtn = useRef();

  useEffect(() => {
    const scrollTopBtn = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        topBtn.current.classList.remove("layout-scroll-top__none");
      } else {
        topBtn.current.classList.add("layout-scroll-top__none");
      }
    };

    window.addEventListener("scroll", scrollTopBtn);
    return () => {
      window.removeEventListener("scroll", scrollTopBtn);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="layout">
      <div className="layout-header">
        <Header />
      </div>
      <div className="layout-container">
        <Outlet />
      </div>
      <div
        className="layout-scroll-top layout-scroll-top__none"
        ref={topBtn}
        onClick={handleScrollTop}
      >
        <ScrollTopBtn />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
