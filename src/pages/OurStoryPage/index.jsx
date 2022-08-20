import React, { useRef, useEffect, useState } from "react";
import "./styles.scss";

//Image
import bannerPho from "../../assets/img/banner-pho.png";
import ourStory1 from "../../assets/img/story/our-story-1.jpg";
import ourStory2 from "../../assets/img/story/our-story-2.jpg";
import ourStory3 from "../../assets/img/story/our-story-3.jpg";
import map from "../../assets/img/story/map.png";
import pattern1 from "../../assets/img/story/pattern-1.png";
import pattern2 from "../../assets/img/story/pattern-2.png";

//Components
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import ImgRounded from "../../components/ImgRounded";
import ButtonRounded from "../../components/ButtonRounded";

const OurStoryPage = () => {
  const [isHistory, setIsHistory] = useState(false);
  const [historyOffset, setHistoryOffset] = useState(0);
  const [chefOffset, setChefOffset] = useState(0);
  const historyRef = useRef();
  const chefRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const offsetTop = historyRef.current.getBoundingClientRect().top;
    window.addEventListener("scroll", () => {
      if (window.scrollY > offsetTop - 240) {
        setIsHistory(true);
      } else {
        setIsHistory(false);
      }
    });
  }, []);

  useEffect(() => {
    setHistoryOffset(historyRef.current.getBoundingClientRect().top);
  }, [historyRef]);

  useEffect(() => {
    setChefOffset(chefRef.current.getBoundingClientRect().top);
  }, [chefRef]);

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
      <div
        className="our-story-page--pattern our-story-page--pattern-1"
        style={{
          top: historyOffset * 0.5,
          left: 0,
        }}
      >
        <img src={pattern1} alt="" />
      </div>
      <div
        className="our-story-page--pattern our-story-page--pattern-1"
        style={{
          top: chefOffset * 0.92,
          left: 0,
        }}
      >
        <img src={pattern2} alt="" />
      </div>
      <div className="our-story-page__main">
        <section className="our-story-page__section">
          <div className="our-story-page__section--img">
            <ImgRounded image={ourStory1} size={"617px"} />
          </div>

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
        <section
          className={`our-story-page__map  ${isHistory ? "in-history" : ""}`}
        >
          <div className="our-story-page__map-content">
            <div className="our-story-page__section--wrap">
              <h1 style={{ color: "#525a3e" }}>Our Story</h1>
              <div
                className="our-story-page__section--divider"
                style={{ transform: "translate(0%)" }}
              >
                <Divider color="red" direction="left" />
              </div>
              <p>
                Pariatur magna id voluptate irure laboris reprehenderit
                consequat enim nostrud ut consequat aute consequat deserunt do
                sunt dolor. Excepteur consequat consectetur occaecat culpa
                adipisicing ex sunt id deserunt enim. Ad cillum sit voluptate
                reprehen
              </p>
              <ButtonRounded>Book your table</ButtonRounded>
            </div>

            <div className={`our-story-page__map-history`} ref={historyRef}>
              <div className="our-story-page__map-history--col">
                <h1>15</h1>
                <h1>8</h1>
                <h1>+20</h1>
              </div>
              <div className="our-story-page__map-history--col">
                <div className="our-story-page__map-history--gr">
                  <h2>Years of Establishment</h2>
                  <Divider color="white" direction="right" />
                  <p>
                    Pariatur magna id voluptate irure laboris reprehenderit
                    consequat enim{" "}
                  </p>
                </div>
                <div className="our-story-page__map-history--gr">
                  <h2>Restaurants</h2>
                  <Divider color="white" direction="right" />
                  <p>
                    Pariatur magna id voluptate irure laboris reprehenderit
                    consequat enim{" "}
                  </p>
                </div>
                <div className="our-story-page__map-history--gr">
                  <h2>Professional Chefs</h2>
                  <Divider color="white" direction="right" />
                  <p>
                    Pariatur magna id voluptate irure laboris reprehenderit
                    consequat enim{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="our-story-page__map-img">
            <img src={map} alt="" />
          </div>
        </section>

        <section className="our-story-page__section">
          <div className="our-story-page__section--img">
            <ImgRounded image={ourStory2} size={"617px"} />
          </div>

          <div className="our-story-page__section--wrap" ref={chefRef}>
            <h1 style={{ color: "#525a3e" }}>Our Chef</h1>
            <div className="our-story-page__section--divider">
              <Divider color="green" />
            </div>
            <p style={{ color: "#171A1FFF" }}>
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
          <div className="our-story-page__section--img">
            <ImgRounded image={ourStory3} size={"617px"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStoryPage;
