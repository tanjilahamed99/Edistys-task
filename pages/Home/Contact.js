import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative h-[500px] w-full">
      {/* Triangle Background */}
      <div className="absolute inset-0 bg-primary clip-left-to-middle"></div>

      <div className="container mx-auto h-full flex items-center relative z-10">
        <div className="space-y-5">
          <h2 className="text-6xl text-white font-medium">Legacy no longer</h2>
          <p className="text-white">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
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

export default Contact;
