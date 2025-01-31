"use client";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Fixed state naming
  const [isMbDropDownOpen, setIsMbDropDownOpen] = useState(false); // Fixed state naming

  return (
    <div className="lg:bg-white bg-primary">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl lg:text-3xl text-white lg:text-black">
            HyTech
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-primary flex items-center ">
            <li className="lg:py-3 cursor-pointer  hover:bg-white lg:px-6 text-lg relative group">
              Solutions
              <ul className="absolute left-0 top-full hidden group-hover:block space-y-3 p-4 bg-white rounded-box z-[10] w-60 shadow">
                <li
                  className=" text-black text-base transition-colors duration-300  hover:text-primary hover:bg-white bg-white
                   cursor-pointer"
                >
                  AnyCaaS
                </li>
                <hr />
                <li
                  className=" text-black text-base transition-colors duration-300  hover:text-primary hover:bg-white bg-white
                   cursor-pointer"
                >
                  AnyBaaS
                </li>
                <hr />
                <li
                  className="text-black text-base transition-colors duration-300  hover:text-primary hover:bg-white bg-white
                   cursor-pointer"
                >
                  AnyPaaS
                </li>
              </ul>
            </li>

            <li
              className="whitespace-nowrap group lg:py-3 lg:border-b lg:px-6 border-white border-opacity-0
             hover:border-opacity-100
             transition-all duration-500 cursor-pointer  hover:!border-primary text-lg"
            >
              Service
            </li>
            <li
              className="whitespace-nowrap group lg:py-3 lg:border-b lg:px-6 border-white border-opacity-0
             hover:border-opacity-100
             transition-all duration-500 cursor-pointer hover:!border-primary  text-lg"
            >
              About
            </li>
            <li className="lg:py-3 cursor-pointer  lg:px-6 text-lg">EN</li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="bg-[#FE8853] text-white hover:bg-[#ee7d48] cursor-pointer hidden 
  max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link 
  lg:text-link lg:flex items-center group transition-all drop-shadow-[#002045] 
  hover:shadow-[#002045] rounded-xs text-xl font-bold rounded-sm gap-1"
          >
            Contact Us
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <div className="relative">
            {/* Open Button */}
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className=" lg:hidden absolute -top-3 right-4 z-20 transition-opacity"
              >
                <FaBars className="text-white text-2xl " />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute  right-4 text-white text-2xl z-50 lg:hidden -top-3"
              >
                <IoMdClose />
              </button>
            )}

            {/* Sidebar Menu */}
            <div
              className={`fixed left-0 w-full text-white shadow-lg z-40 bg-[#1b75db] transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ height: "", marginTop: "30px" }} // Custom height & margin from navbar
            >
              {/* Menu Items */}
              <ul className="menu p-4 ">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsMbDropDownOpen(!isMbDropDownOpen)}
                >
                  <h2 className="font-medium text-sm">Solution</h2>

                  {isMbDropDownOpen ? (
                    <MdOutlineKeyboardArrowUp className="text-xl transition-transform duration-300 rotate-180" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="text-xl transition-transform duration-300" />
                  )}
                </div>

                {/* Smooth Height Transition */}
                <div
                  className={`overflow-hidden transition-all duration-300  ${
                    isMbDropDownOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <li className=" text-sm transition-colors duration-300 px-3 py-2 hover:text-primary  text-white cursor-pointer">
                    AnyCaaS
                  </li>
                  <li className=" text-sm transition-colors duration-300 px-3 py-2 hover:text-primary  text-white cursor-pointer">
                    AnyBaaS
                  </li>
                  <li className=" text-sm transition-colors duration-300 px-3 py-2 hover:text-primary  text-white cursor-pointer">
                    AnyPaaS
                  </li>
                </div>
                <h2 className="font-medium text-sm my-4">Solution</h2>
                <h2 className="font-medium text-sm">Solution</h2>

                <button className="w-full border border-white h-10 mt-5 font-semibold  rounded-md flex justify-center items-center gap-2 ">
                  Contact Us <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
