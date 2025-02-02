"use client";

import React, { useState, useEffect } from "react";
import mainImg from "../../public/images/premium_photo-1688821126516-aad66aa5510d.jpg";
import Image from "next/image";
import img1 from "../../public/images/WaveLinesDesktop1.svg";
import img2 from "../../public/images/2.svg";
import img3 from "../../public/images/3.svg";
import img4 from "../../public/images/WaveLinesDesktop4.svg";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css";

const Feature = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="container mx-auto my-10 flex flex-col lg:flex-row items-center gap-20  lg:gap-10 lg:h-[500px] p-2 md:p-5 xl:p-0">
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-primary text-lg font-bold">
          {" "}
          POWERING THE FUTURE OF FINANCE
        </h2>
        <h2 className="text-[#0b305B] text-4xl xl:text-5xl font-bold lg:leading-[55px]">
          Uncovering new <br /> ways to delight <br /> customers
        </h2>
        <p className="text-[#0b305B] font-semibold">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-[#0b305B]">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>
      <div
        className={`relative xl:w-1/2 lg:w-[450px] w-[90%] flex justify-center overflow- ${
          animate ? "animate-bg-move" : ""
        }`}
        onMouseEnter={() => setAnimate(true)}
      >
        {/* Moving Background Images inside the Main Image Box */}
        <Image
          src={img2}
          alt="bg1"
          className="absolute md:-top-36 md:right-40 lg:-top-10 lg:left-0 xl:-top-20 xl:left-8 -top-6 -right-0 h-20 w-20  lg:w-full opacity-70 moving-bg md:h-80 "
        />
        <Image
          src={img2}
          alt="bg1"
          className="absolute md:-top-8 md:right-36 lg:-top-10 lg:right-12 xl:-top-16 xl:right-28 -top-6 right-5 h-20 w-20   opacity-70 moving-bg md:h-20 md:w-40"
        />
        <Image
          src={img2}
          alt="bg1"
          className="absolute bottom-6  right-14 opacity-70 moving-bg h-20 w-40"
        />

        <Image
          src={img2}
          alt="bg1"
          className="absolute bottom-0 right-14 w-40 opacity-70 moving-bg h-20 "
        />
        <Image
          src={img3}
          alt="bg1"
          className="absolute md:-top-10 md:left-20 lg:-left-2 lg:-top-10 xl:-top-16 xl:left-20 -top-7 w-20 h-20 -left-5 md:w-60 xl:w-60
           opacity-70 md:h-60 xl:h-60 transform -rotate-180"
        />

        {/* Main Image */}
        <Image
          src={mainImg}
          alt="Main Image"
          height={500}
          width={500}
          className="w-[350px] h-[300px] mx-auto relative z-10 flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Feature;
