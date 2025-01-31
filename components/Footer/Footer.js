import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#002045] border-y border-gray-500 py-2 md:py-5">
        <div
          className="footer text-neutral-content items-center p-4 container mx-auto justify-center
         md:justify-around lg:justify-between flex "
        >
          {/* image row / icons  */}
          <div className="flex justify-around items-center gap-5">
            <h2 className="md:text-3xl text-2xl font-semibold">HyTech</h2>
          </div>

          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <nav className="hidden lg:flex">
              <h2 className="text-[#00E9EA] px-5 py-4 font-semibold border-r border-[#164377]">
                Our Solutions
              </h2>
              <h2
                className="text-[#00E9EA] px-5 py-4 font-semibold  transition-colors
             duration-300 last:pr-0 hover:text-blue-400 cursor-pointer"
              >
                AnyCaaS
              </h2>
              <h2
                className="text-[#00E9EA] px-5 py-4 font-semibold  transition-colors
             duration-300 last:pr-0 hover:text-blue-400 cursor-pointer"
              >
                AnyBaaS
              </h2>
              <h2
                className="text-[#00E9EA] px-5 py-4 font-semibold  transition-colors
             duration-300 last:pr-0 hover:text-blue-400 cursor-pointer"
              >
                AnyPaaS
              </h2>
            </nav>
            <div className="flex items-center gap-3 md:gap-10 lg:hidden">
              <ImLinkedin2 className="text-2xl bg-[#1F80F0] text-blue-950 p-0.5 rounded-sm cursor-pointer" />
              <FaPhone className="text-2xl text-[#1F80F0]  rounded-sm cursor-pointer" />
              <MdOutlineMail className="text-2xl text-[#1F80F0] rounded-sm cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00152D]">
        <div className="footer  text-neutral-content items-center p-4 container mx-auto">
          <div>
            <p className="text-primary font-semibold">
              ©2023 All rights reserved.{" "}
              <span className="font-medium">Any Technology Pte Ltd.</span>
            </p>
          </div>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <h2 className="text-primary font-semibold">Privacy Policy</h2>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
