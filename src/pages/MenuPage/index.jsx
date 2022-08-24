import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";

//Image
import bannerPho from "../../assets/img/banner-pho.png";
import menuLeft1 from "../../assets/img/menu/menu-left-1.png";
import menuLeft2 from "../../assets/img/menu/menu-left-2.png";
import menuLeft3 from "../../assets/img/menu/menu-left-3.png";
import menuLeft4 from "../../assets/img/menu/menu-left-4.png";
import menuRight1 from "../../assets/img/menu/menu-right-1.png";
import menuRight2 from "../../assets/img/menu/menu-right-2.png";
import menuRight3 from "../../assets/img/menu/menu-right-3.png";
import menuRight4 from "../../assets/img/menu/menu-right-4.png";
import pattern1 from "../../assets/img/menu/pattern-1.png";
import pattern2 from "../../assets/img/menu/pattern-2.png";

//Components
import FormContainer from "../../components/FormContainer";
import Divider from "../../components/Divider";
import ButtonRounded from "../../components/ButtonRounded";

const menuListLeft = [
  {
    id: 1,
    title: "Pho Bo Chin",
    des: "Well-done Beef Noodle Soup with Traditional Broth",
    img: menuLeft1,
  },
  {
    id: 2,
    title: "Pho Bo Tai Truyen Thong",
    des: "Rare Beef Noodle Soup with Traditional Broth",
    img: menuLeft2,
  },
  {
    id: 3,
    title: "Pho Ga Xe",
    des: "Shredded Chicken Noodle Soup",
    img: menuLeft3,
  },
  {
    id: 4,
    title: "Pho Chay",
    des: "Vegan Noodle Soup",
    img: menuLeft4,
  },
];

const menuListRight = [
  {
    id: 1,
    title: "Goi Cuon",
    des: "Spring Rolls with Shrimp and Pork",
    img: menuRight1,
  },
  {
    id: 2,
    title: "Banh Quay",
    des: "Bagel Twist",
    img: menuRight2,
  },
  {
    id: 3,
    title: "Trung Chan Nuoc Soi",
    des: "Poached Egg",
    img: menuRight3,
  },
  {
    id: 4,
    title: "Goi Cuon Chay",
    des: "Vegan Spring Rolls",
    img: menuRight4,
  },
];

const MenuPage = () => {
  const rightMenuRef = useRef();
  const [circleLeftClass, setCircleLeftClass] = useState("rotate--1");
  const [circleRightClass, setCircleRightClass] = useState("rotate--1");
  const [activeLeftId, setActiveLeftId] = useState(1);
  const [activeRightId, setActiveRightId] = useState(1);
  const [menuRightOffset, setMenuRightOffset] = useState(
    rightMenuRef.current?.offsetTop || 0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuRightOffset(rightMenuRef.current.offsetTop);
  }, []);

  const handleLeftNext = () => {
    if (activeLeftId < 4) {
      setActiveLeftId(activeLeftId + 1);
    } else {
      setActiveLeftId(1);
    }
  };

  const handleLeftPrev = () => {
    if (activeLeftId > 1) {
      setActiveLeftId(activeLeftId - 1);
    } else {
      setActiveLeftId(4);
    }
  };

  const handleRightNext = () => {
    if (activeRightId < 4) {
      setActiveRightId(activeRightId + 1);
    } else {
      setActiveRightId(1);
    }
  };

  const handleRightPrev = () => {
    if (activeRightId > 1) {
      setActiveRightId(activeRightId - 1);
    } else {
      setActiveRightId(4);
    }
  };

  useEffect(() => {
    setCircleLeftClass(`rotate--${activeLeftId}`);
  }, [activeLeftId]);

  useEffect(() => {
    setCircleRightClass(`rotate--${activeRightId}`);
  }, [activeRightId]);

  return (
    <div className="menu-page">
      <div className="menu-page__pattern">
        <img src={pattern1} alt="" />
      </div>
      <div
        className="menu-page__pattern--2"
        style={{ top: menuRightOffset * 2 }}
      >
        <img src={pattern2} alt="" />
      </div>

      <div className="menu-page__banner">
        <div className="menu-page__banner--col">
          <div className="menu-page__banner--title">
            <h1>Dish of the Day</h1>
            <Divider color="white" direction="left" />
          </div>

          <div className="menu-page__banner--dish">
            <div className="menu-page__banner--dish-in4">
              <h1>Pho Ga Xe</h1>
              <h4>Shredded Chicken Noodle Soup</h4>
              <Divider color="red" direction="right" />
              <p>
                Magna ad occaecat minim ad et veniam ea aliquip irure. Nulla
                veniam cillum ut deserunt Lor
              </p>
            </div>

            <div className="menu-page__banner--dish-btn">
              <ButtonRounded>
                <span>Know more</span>
                <i className="fa-solid fa-angle-right"></i>
              </ButtonRounded>
            </div>
          </div>
        </div>
        <div className="menu-page__banner--col">
          <img src={bannerPho} alt="" />
        </div>
      </div>
      <section className="menu-page__round-slider menu-page__round-slider--1 ">
        <div className={`circle-gr ${circleLeftClass}`}>
          {menuListLeft.map((item) => (
            <div
              className={`circle-item circle-item__${item.id} ${
                activeLeftId === item.id ? "active" : ""
              }`}
              key={item.id}
              onClick={() => {
                setActiveLeftId(item.id);
              }}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>

        <div className="menu-page__round-slider--content">
          <h1>{menuListLeft[activeLeftId - 1].title}</h1>
          <h3>{menuListLeft[activeLeftId - 1].des}</h3>
          <div className="menu-page__round-slider--divider">
            <Divider color="white" direction="right" />
          </div>
          <p>
            Pariatur magna id voluptate irure laboris reprehenderit consequat
            enim nostrud ut consequat aute consequat deserunt do sunt dolor.
            Excepteur consequat consectetur occaecat culpa adipisicing ex sunt
            id deserunt enim. Ad cillum sit voluptate reprehen
          </p>

          <div
            className="menu-page__round-slider--content-btn menu-page__round-slider--content-next"
            onClick={handleLeftNext}
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div
            className="menu-page__round-slider--content-btn menu-page__round-slider--content-prev"
            onClick={handleLeftPrev}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <ButtonRounded>Book your table</ButtonRounded>
        </div>
      </section>
      <section
        className="menu-page__round-slider menu-page__round-slider--2"
        ref={rightMenuRef}
      >
        <div className={`circle-gr--2 ${circleRightClass}`}>
          {menuListRight.map((item) => (
            <div
              className={`circle-item--2 circle-item--2__${item.id} ${
                activeRightId === item.id ? "active" : ""
              }`}
              key={item.id}
              onClick={() => {
                setActiveRightId(item.id);
              }}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>

        <div className="menu-page__round-slider--content">
          <h1 style={{ color: "#525A3EFF" }}>
            {menuListRight[activeRightId - 1].title}
          </h1>
          <h3 style={{ color: "#525A3EFF" }}>
            {menuListRight[activeRightId - 1].des}
          </h3>
          <div className="menu-page__round-slider--divider">
            <Divider color="green" direction="left" />
          </div>
          <p style={{ color: "#525A3EFF" }}>
            Pariatur magna id voluptate irure laboris reprehenderit consequat
            enim nostrud ut consequat aute consequat deserunt do sunt dolor.
            Excepteur consequat consectetur occaecat culpa adipisicing ex sunt
            id deserunt enim. Ad cillum sit voluptate reprehen
          </p>

          <div
            className="menu-page__round-slider--content-btn menu-page__round-slider--content-next"
            onClick={handleRightNext}
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div
            className="menu-page__round-slider--content-btn menu-page__round-slider--content-prev"
            onClick={handleRightPrev}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <ButtonRounded>Book your table</ButtonRounded>
        </div>
      </section>
      <div className="menu-page__form">
        <FormContainer />
      </div>
    </div>
  );
};

export default MenuPage;
