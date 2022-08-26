import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";

import homeSlider1 from "../../assets/img/home/home-slider-1.jpg";
import homeSlider2 from "../../assets/img/home/home-slider-2.jpg";
import homeSlider3 from "../../assets/img/home/home-slider-3.jpg";

// Import components
import ImgRounded from "../ImgRounded";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./styles.scss";

const listText = ["Southern Vietnam", "Northern Vietnam", "Central Vietnam"];

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="home-slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={activeIndex}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        onSlideChange={(value) => {
          setActiveIndex(value.activeIndex);
        }}
      >
        <SwiperSlide>
          <ImgRounded image={homeSlider1} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgRounded image={homeSlider2} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgRounded image={homeSlider3} />
        </SwiperSlide>
      </Swiper>
      <div className="home-page__slider--subtitle">
        <h2>{listText[activeIndex]}</h2>
        <span>
          Eiusmod tempor elit esse velit non minim in ut reprehenderit
          reprehenderi
        </span>
      </div>
    </div>
  );
};

export default HomeSlider;
