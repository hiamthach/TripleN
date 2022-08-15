import React from "react";

//Components
import Banner from "../../components/Banner";
import ButtonRounded from "../../components/ButtonRounded";

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
    </div>
  );
};

export default HomePage;
