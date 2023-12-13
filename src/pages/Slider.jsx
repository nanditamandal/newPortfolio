import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tailwind from '../assets/tailwind.jpg'
import react from '../assets/react.jpg'
import js from '../assets/js.png'
import swiper from '../assets/swiper.png'

import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

export default function Slider() {
  return (
    <section id="blogs" className="container mx-auto bg-slate-800 w-[100%] h-[100vh]">

      
      <div className="flex justify-center">
        <h1 className="text-white lg:text-5xl md:text-4xl text-3xl  font-semibold md:mb-20 mb-8 text-center">Blog <span className="text-primary">Details</span> </h1>

        </div>
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
    <a rel="noreferrer" target="_blank" href="https://nanditamandal.medium.com">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={swiper} alt="Shoes" className="rounded-xl" />
      </figure>
  <div className="card-body items-center text-center">
   
    <p>please visit my blog post..</p>
    <div className="card-actions">
    <button className=" transition-all ease-linear duration-[2000ms] border-2 border-indigo-600 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-5 text-white font-bold py-2 px-4 hover:scale-100 rounded">
        See More
      </button>
    </div>
  </div>
</div>
</a>
    </SwiperSlide>
    <SwiperSlide>
    <a rel="noreferrer" target="_blank" href="https://nanditamandal.medium.com">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={js} alt="Shoes" className="rounded-xl" />
      </figure>
  <div className="card-body items-center text-center">
    
  <p>please visit my blog post..</p>
    <div className="card-actions">
    <button className=" transition-all ease-linear duration-[2000ms] border-2 border-indigo-600 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-5 text-white font-bold py-2 px-4 hover:scale-100 rounded">
        See More
      </button>
    </div>
  </div>
</div>
</a>
    </SwiperSlide>
    <SwiperSlide>
    <a rel="noreferrer" target="_blank" href="https://nanditamandal.medium.com">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={react} alt="Shoes" className="rounded-xl" />
      </figure>
  <div className="card-body items-center text-center">
   
  <p>please visit my blog post..</p>
    <div className="card-actions">
    <button className=" transition-all ease-linear duration-[2000ms] border-2 border-indigo-600 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-5 text-white font-bold py-2 px-4 hover:scale-100 rounded">
        See More
      </button>
    </div>
  </div>
</div>
</a>
    </SwiperSlide>
    <SwiperSlide>
    <a rel="noreferrer" target="_blank" href="https://nanditamandal.medium.com">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={tailwind} alt="Shoes" className="rounded-xl" />
      </figure>
  <div className="card-body items-center text-center">
    
  <p>please visit my blog post..</p>
    <div className="card-actions">
    <button className=" transition-all ease-linear duration-[2000ms] border-2 border-indigo-600 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-5 text-white font-bold py-2 px-4 hover:scale-100 rounded">
        See More
      </button>
    </div>
  </div>
</div>
</a>
    </SwiperSlide>
  
  </Swiper>


    </section>

   
  )
}
