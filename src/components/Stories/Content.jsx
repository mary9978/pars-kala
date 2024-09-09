"use client";
import data from "./data.json";
import Stories from "react-insta-stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../../styles/stories.css";
import ContentWrapper from "./ContentWrapper";
import { IoClose } from "react-icons/io5";

export default function Content({
  id,
  onClickLeft,
  onClickRight,
  showContainer,
  onClose,
}) {
  return (
    showContainer && (
      <div
        className={`stories max-w-[1280px] bg-[#222224a2] fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-screen h-screen flex flex-col justify-evenly`}
      >
        <div className="p-3" onClick={onClose}>
          <IoClose color="white" size={30} />
        </div>
        <div className="flex justify-center items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 60,
              modifier: 10,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper-container mySwiper"
            slidesPerView={"auto"}
            navigation
            onNavigationNext={onClickLeft}
            onNavigationPrev={onClickRight}
            initialSlide={id - 1}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <ContentWrapper>
                  <Stories
                    stories={item.slides}
                    defaultInterval={1500}
                    width={250}
                    height={450}
                    onAllStoriesEnd={() => {}}
                    progressStyles={{ transformOrigin: "center right" }}
                    isPaused={item.id === id ? false : true}
                  />
                </ContentWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  );
}
