import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.jpg'
import react from '../assets/react.jpg'

import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    // centeredSlides={true}
    // slidesPerView={'auto'}
    loop={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[Autoplay, EffectCoverflow, Pagination]}
    className="mySwiper"
    
    spaceBetween={50}
    slidesPerView={3}
    breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <img src={css} alt="html"  />
    </SwiperSlide>
    <SwiperSlide>
        <img src={js} alt="html"  />
    </SwiperSlide>
    <SwiperSlide>
        <img src={react} alt="html"  />
    </SwiperSlide>
  
  </Swiper>
  )
}
