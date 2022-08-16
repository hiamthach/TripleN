import React from "react";

import "./styles.scss";

//Components
import Banner from "../../components/Banner";
import ButtonRounded from "../../components/ButtonRounded";
import HomeSlider from "../../components/HomeSlider";

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
