import React from "react";
import "./styles.scss";

//Image
import bannerPho from "../../assets/img/banner-pho.png";
import ourStory1 from "../../assets/img/story/our-story-1.jpg";
import ourStory2 from "../../assets/img/story/our-story-2.jpg";
import ourStory3 from "../../assets/img/story/our-story-3.jpg";

//Components
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import ImgRounded from "../../components/ImgRounded";
import ButtonRounded from "../../components/ButtonRounded";

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

      <div className="our-story-page__main">
        <section className="our-story-page__section">
          <ImgRounded image={ourStory1} />

          <div className="our-story-page__section--wrap">
            <h1>Back in time</h1>
            <div className="our-story-page__section--divider">
              <Divider color="white" />
            </div>
            <p>
              Pariatur magna id voluptate irure laboris reprehenderit consequat
              enim nostrud ut consequat aute consequat deserunt do sunt dolor.
              Excepteur consequat consectetur occaecat culpa adipisicing ex sunt
              id deserunt enim. Ad cillum sit voluptate reprehen
            </p>
          </div>
        </section>

        <section className="our-story-page__section">
          <ImgRounded image={ourStory2} />

          <div className="our-story-page__section--wrap">
            <h1>Our Chef</h1>
            <div className="our-story-page__section--divider">
              <Divider color="white" />
            </div>
            <p>
              Pariatur magna id voluptate irure laboris reprehenderit consequat
              enim nostrud ut consequat aute consequat deserunt do sunt dolor.
              Excepteur consequat consectetur occaecat culpa adipisicing ex sunt
              id deserunt enim. Ad cillum sit voluptate reprehen
            </p>
          </div>
        </section>

        <section className="our-story-page__section">
          <div className="our-story-page__section--wrap">
            <h1>Ingredients</h1>
            <div className="our-story-page__section--divider our-story-page__section--divider__left">
              <Divider color="white" direction="left" />
            </div>
            <p>
              Pariatur magna id voluptate irure laboris reprehenderit consequat
              enim nostrud ut consequat aute consequat deserunt do sunt dolor.
              Excepteur consequat consectetur occaecat culpa adipisicing ex sunt
              id deserunt enim. Ad cillum sit voluptate reprehen
            </p>
            <ButtonRounded>Book your table</ButtonRounded>
          </div>

          <ImgRounded image={ourStory3} />
        </section>
      </div>
    </div>
  );
};

export default OurStoryPage;
