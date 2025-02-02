"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import mainImg from "../../public/images/premium_photo-1688821126516-aad66aa5510d.jpg";
import img2 from "../../public/images/2.svg";
import img3 from "../../public/images/3.svg";
import "../../pages/Home/style.css";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <div className="bg-primary inset-0 clip-left-to-right lg:mt-20 mt-0 lg:h-[550px]">
        <div
          onMouseEnter={() => setAnimate(true)}
          className="container mx-auto flex flex-col  justify-center h-[300px] lg:h-[550px] relative"
        >
          <div className=" space-y-5 xl:space-y-6 p-5 xl:p-0 z-30">
            <h2 className="text-white text-4xl xl:text-7xl font-bold xl:leading-[55px]">
              Embrace the <br /> future of finance
            </h2>
            <p className="text-white font-semibold">
              Reimagine financial services with AnyTech’s open platform,
              distributed <br /> banking solution that powers transformation
            </p>
            <button
              className="bg-[#FE8853] text-white hover:bg-[#ee7d48] cursor-pointer hidden 
                                  max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link 
                                  lg:text-link lg:flex items-center group transition-all drop-shadow-[#002045] 
                                hover:shadow-[#002045] rounded-xs text-xl font-bold rounded-sm gap-1"
            >
              Reach Out to Us{" "}
              <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <Image
            src={mainImg}
            alt="Main Image"
            height={500}
            width={500}
            className="w-[800px]  clip-left-to-image h-[800px] right-0  bottom-0 mx-auto absolute z-10 hidden lg:flex items-center justify-center"
          />
          <Image
            src={img2}
            alt="bg1"
            className="absolute -top-52 -left-[350px] hidden md:inline  h-[600px] w-[600px]
             opacity-100 moving-bg"
          />
          <Image
            src={img2}
            alt="bg1"
            className="absolute -top-80 right-[140px] hidden md:inline  h-[500px] w-[600px]
             opacity-100 moving-bg z-20"
          />
          <Image
            src={img2}
            alt="bg1"
            className="hidden lg:inline absolute  -bottom-40 left-0  h-[400px] w-[400px]
             opacity-100 moving-bg"
          />

          <Image
            src={img2}
            alt="bg1"
            className="absolute -top-10 left-[600px] hidden md:inline
             opacity-80 moving-bg"
          />
        </div>
      </div>
      <Image
        src={mainImg}
        alt="Main Image"
        height={500}
        width={500}
        className="w-[800px]  clip-left-to-image h-[500px] right-0  bottom-0 mx-auto  z-10  lg:hidden items-center justify-center"
      /> 
    </div>
  );
};

export default Banner;
