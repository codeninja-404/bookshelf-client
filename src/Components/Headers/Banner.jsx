import Title from "../Tools/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../src/styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div
      className="pt-20
     text-center"
    >
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img className="rounded-lg shadow-xl shadow-black" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
