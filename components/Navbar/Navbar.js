import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">HyTech</a>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
