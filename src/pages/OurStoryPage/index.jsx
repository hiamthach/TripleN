import React from "react";
import "./styles.scss";

import bannerPho from "../../assets/img/banner-pho.png";

//Components
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";

const OurStoryPage = () => {
  return (
    <div className="our-story-page">
      <div className="our-story-page__banner">
        <Banner where="story">
          <div className="banner__row">
            <div className="banner__col">
              <h1 className="banner__title">Hometown Flavour</h1>

              <div className="banner__col--divider">
                <Divider />
              </div>
              <h4>Seeking for the original</h4>
            </div>

            <div className="banner__col">
              <img src={bannerPho} alt="" />
            </div>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default OurStoryPage;
