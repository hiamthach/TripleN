import React, { useState } from "react";

import "./styles.scss";

//Image
import homeMenu1 from "../../assets/img/home/home-menu-1.jpg";

//Components
import Banner from "../../components/Banner";
import ButtonRounded from "../../components/ButtonRounded";
import HomeSlider from "../../components/HomeSlider";
import Divider from "../../components/Divider";

const homeMenuList = [
  {
    id: 0,
    title: "Pho Bo Cay",
    des: "Beef Noodle Soup with Spicy Broth",
    img: homeMenu1,
  },
  {
    id: 1,
    title: "Pho Bo Tai",
    des: "Beef Noodle Soup with Spicy Broth",
    img: homeMenu1,
  },
  {
    id: 2,
    title: "Pho Bo Gan",
    des: "Beef Noodle Soup with Spicy Broth",
    img: homeMenu1,
  },
  {
    id: 3,
    title: "Pho Bo Nam",
    des: "Beef Noodle Soup with Spicy Broth",
    img: homeMenu1,
  },
  {
    id: 4,
    title: "Pho Bo Dac biet",
    des: "Beef Noodle Soup with Spicy Broth",
    img: homeMenu1,
  },
];

const MenuImg = ({ id, img, active, setActive }) => {
  console.log(active);
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

  return (
    <div className="home-page">
      <div className="home-page__banner">
        <Banner where="home">
          <h1 className="banner__title">Hometown Flavour</h1>
          <ButtonRounded>
            <span>BOOK NOW</span> <i className="fa-solid fa-angle-right"></i>
          </ButtonRounded>
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
        <div className="home-page__slider--btn">
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
              fugiat voluptate dolor ea tempor qui magna labore excepteur
              laboris consequat.
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
    </div>
  );
};

export default HomePage;
