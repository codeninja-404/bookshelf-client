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
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide  >
          <img className="rounded-lg shadow-xl shadow-black" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930" />
        </SwiperSlide>
        <SwiperSlide  >
          <img className="rounded-lg shadow-xl shadow-black"  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_78895234.png?auto=format&q=60&fit=max&w=930" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_80004080-e1488217702832.jpg?auto=format&q=60&fit=max&w=930" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://litreactor.com/sites/default/files/images/column/2017/01/15844355101549107478369674635878427388822248o.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://dfb503wu29eo2.cloudfront.net/slir/h1200/png24-front/bookcover0010364.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_89813176-e1513568802294.jpg?auto=format&q=60&fit=max&w=930" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg shadow-xl shadow-black"  src="https://i.pinimg.com/originals/26/7a/56/267a56a08dad6124d458fa67da140666.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
