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

const HomeSlider = () => {
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
        initialSlide="1"
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImgRounded image={homeSlider1} size={"360px"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgRounded image={homeSlider2} size={"360px"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgRounded image={homeSlider3} size={"360px"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
