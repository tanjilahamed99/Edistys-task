"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sliderData from "../../slider.json";
import Image from "next/image";

const FeatureSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active index

  return (
    <div className="w-full">
      {/* Navigation Titles with Click Effect */}
      <div className="hidden lg:flex justify-center gap-3">
        {sliderData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              swiperRef.current?.swiper.slideTo(idx);
              setActiveIndex(idx); // Set active index
            }}
            className={`px-4 py-2 font-semibold rounded-[200px] transition xl:px-[48px] md:px-[38px]  duration-300 text-blue-main undefined
              ${
                activeIndex === idx
                  ? " bg-blue-200 text-primary "
                  : "bg-white text-primary"
              } 
              hover:bg-blue-100`}
          >
            {item.type}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        speed={1500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index on slide change
        className="mySwiper"
      >
        {sliderData.map((item, idx) => (
          <SwiperSlide key={idx} className="md:p-5 p-2">
            <div className="shadow shadow-gray-300 w-full lg:p-10 xl:p-20 md:p-5 p-3 flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2 w-full md:space-y-8 space-y-4">
                <h2 className="text-primary font-semibold text-base md:text-lg">
                  {item.type}
                </h2>
                <h2 className="text-[#0b305B] font-bold text-xl md:text-4xl">
                  {item.title}
                </h2>
                <Image
                  src={item.image}
                  alt={idx + "image not found"}
                  width={400}
                  height={400}
                  className="h-[150px] w-full rounded-md md:hidden mx-auto"
                />
                <h2 className="text-[#164377] leading-7 font-bold text-sm md:text-base">
                  {item.descriptionOne}
                </h2>
                <h2 className="text-[#164377] leading-7 text-sm md:text-base">
                  {item.descriptionTwo}
                </h2>
              </div>
              <Image
                src={item.image}
                alt={idx + "image not found"}
                width={400}
                height={400}
                className="w-full lg:w-[489px] h-[425px] rounded-md hidden md:inline"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
