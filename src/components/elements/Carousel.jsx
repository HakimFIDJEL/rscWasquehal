'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/modules/navigation.min.css';
// import 'swiper/modules/pagination.min.css';
// import 'swiper/modules/scrollbar.min.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

const Carousel = ({ children, options }) => {
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} {...options}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
