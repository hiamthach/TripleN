import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";

import { useLocation } from "react-router-dom";

//Image
import homeMenu1 from "../../assets/img/home/home-menu-1.jpg";
import homeMenu2 from "../../assets/img/home/home-menu-2.png";
import homeMenu3 from "../../assets/img/home/home-menu-3.png";
import homeMenu4 from "../../assets/img/home/home-menu-4.png";
import homeMenu5 from "../../assets/img/home/home-menu-5.png";

//Components
import Banner from "../../components/Banner";
import ButtonRounded from "../../components/ButtonRounded";
import HomeSlider from "../../components/HomeSlider";
import Divider from "../../components/Divider";
import FormContainer from "../../components/FormContainer";
import BookModal from "../../components/BookModal";

const homeMenuList = [
  {
    id: 0,
    title: "Pho Bo Cay",
    des: "Beef Noodle Soup with Spicy Broth",
    img: homeMenu1,
  },
  {
    id: 1,
    title: "Pho Bo Chin",
    des: "Well-done Beef Noodle Soup with Traditional Broth",
    img: homeMenu2,
  },
  {
    id: 2,
    title: "Pho Bo Tai Truyen Thong",
    des: "Rare Beef Noodle Soup with Traditional Broth",
    img: homeMenu3,
  },
  {
    id: 3,
    title: "Pho Uc Ga",
    des: "Chicken Breast Noodle Soup with Traditional Broth",
    img: homeMenu4,
  },
  {
    id: 4,
    title: "Pho Ga Thuoc Bac",
    des: "Chicken Noodle Soup with Stewed Sweet Herbal Broth",
    img: homeMenu5,
  },
];

const MenuImg = ({ id, img, active, setActive }) => {
  return (
    <div
      className={`home-page__menu--img-item ${active ? "active" : ""} }`}
      onClick={() => {
        setActive(homeMenuList[id]);
      }}
    >
      <img src={img} alt="" />
    </div>
  );
};

const HomePage = () => {
  const [activeImg, setActiveImg] = useState(homeMenuList[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const contactRef = useRef();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contacts") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <div className="home-page">
      <div className="home-page__banner">
        <Banner where="home">
          <h1 className="banner__title">Hometown Flavour</h1>
          <div className="home-page__banner--btn" onClick={openModal}>
            <ButtonRounded>
              <span>BOOK NOW</span> <i className="fa-solid fa-angle-right"></i>
            </ButtonRounded>
          </div>
        </Banner>
      </div>

      <div className="home-page__slider">
        <div className="home-page__slider--title">
          <h1>Choose your home town</h1>
          <span>
            Occaecat minim ipsum sit fugiat nulla qui consequat ex qui officia
            laborum. Nostrud pariatur id cillum sunt temp
          </span>
        </div>
        <HomeSlider />
        <div className="home-page__slider--subtitle">
          <h2>Northern Vietnam</h2>
          <span>
            Eiusmod tempor elit esse velit non minim in ut reprehenderit
            reprehenderi
          </span>
        </div>
        <div className="home-page__slider--btn" onClick={openModal}>
          <ButtonRounded>Book your table</ButtonRounded>
        </div>
      </div>

      <div className="home-page__wrap">
        <h1>Our story</h1>
        <p>
          Labore aliquip ullamco officia consectetur reprehenderit ullamco ad
          est tempor et ad ea anim Lorem anim aliquip dolor anim et. Labore do
          irure eu duis nisi esse excepteur dolor. Ad nisi quis duis duis
          officia eu. Velit sint officia ipsum ipsum amet mollit id id dolore.
        </p>
      </div>

      <div className="home-page__menu">
        <div className="home-page__menu-list-img">
          {homeMenuList.map((item, index) => {
            return (
              <MenuImg
                id={item.id}
                key={index}
                img={item.img}
                active={item.id === activeImg?.id}
                setActive={setActiveImg}
              />
            );
          })}
        </div>

        <div className="home-page__menu-main">
          <div className="home-page__menu-main--card">
            <h1>{activeImg.title}</h1>
            <h3>{activeImg.des}</h3>
            <Divider color="green" />
            <p>
              Labore adipisicing eu laborum in in ex exercitation duis nulla
              aliqua aliquip esse ad anim est dolor culpa et nostrud. Duis
              fugiat voluptate.
            </p>
            <div className="home-page__menu-main--btn">
              <ButtonRounded>
                More<i className="fa-solid fa-angle-right"></i>
              </ButtonRounded>
            </div>
          </div>

          <div className="home-page__menu-main--img">
            <img src={activeImg.img} alt="" />
          </div>
        </div>
      </div>

      <div className="home-page__contact" ref={contactRef}>
        <div className="home-page__contact--col">
          <h1>Contact</h1>
          <div className="home-page__contact--in4">
            <div className="home-page__contact--in4-wrap">
              <div className="home-page__contact--in4-line">
                <span>Address: </span>
                <p>123 TripleN, 14 Ward, District 1, HCM city</p>
              </div>
              <div className="home-page__contact--in4-line">
                <span>Tel: </span>
                <p>+84234567891</p>
              </div>
              <div className="home-page__contact--in4-line">
                <span>Email: </span>
                <p>phongoc@food.com.vn</p>
              </div>
            </div>
            <div className="home-page__contact--in4-wrap">
              <div className="home-page__contact--in4-line">
                <span>Working hours: </span>
                <p>Mon - Fri: 9:00 - 21:00</p>
              </div>
              <div className="home-page__contact--in4-line">
                <p>Sat: 8:30 - 20:00</p>
              </div>
              <div className="home-page__contact--in4-line">
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="home-page__contact--icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div className="home-page__contact--divider"></div>

        <div className="home-page__contact--col home-page__contact--col-form">
          <FormContainer />
        </div>
      </div>

      <BookModal isVisible={modalVisible} setVisible={setModalVisible} />
    </div>
  );
};

export default HomePage;
