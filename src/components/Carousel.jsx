"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div
      id="container"
      className="container relative max-w-[1280px] w-full flex justify-center"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <img src="./img/head1.jpg" className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/head2.jpg" className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/head3.jpg" className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/head4.jpg" className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/head5.jpg" className="w-full h-full" alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
