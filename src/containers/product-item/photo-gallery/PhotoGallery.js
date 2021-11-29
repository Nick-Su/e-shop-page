import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.scss';

import productImage from '../../../assets/pictures/product-image-1.png'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export const PhotoGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={productImage}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img src={productImage} alt={`Product thumbnail`}  className="product-thumbnail-image" />
      </SwiperSlide>
    );
  }

  const pagination = {
    el: '.swiper-pagination',
    "clickable": true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  }
  return (
    <div className="photo-gallery">
      <React.Fragment>
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          pagination={pagination}
          spaceBetween={1}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
        <br />
        <Swiper
          className="thumbnails"
          spaceBetween={2}
          slidesPerView={5}
          onSwiper={setThumbsSwiper}
        >
          {thumbs}
        </Swiper>
      </React.Fragment>
    </div>
  );
}
