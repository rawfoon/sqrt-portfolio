import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// image
import sqrt1 from '../assets/slider/sqrt1.jpg'
import sqrt2 from '../assets/slider/sqrt2.jpg'
import sqrt3 from '../assets/slider/sqrt3.jpg'

const Slider = () => {
    return (
        <div>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={sqrt1} className='w-full' alt="" /></SwiperSlide>
      <SwiperSlide><img src={sqrt2} className='w-full' alt="" /></SwiperSlide>
      <SwiperSlide><img src={sqrt3} className='w-full' alt="" /></SwiperSlide>
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide> */}
      {/* ... */}
    </Swiper>
        </div>
    );
};

export default Slider;