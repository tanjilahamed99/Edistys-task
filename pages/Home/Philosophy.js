import Image from "next/image";
import connectImg1 from "../../public/images/Line1.svg";
import connectImg2 from "../../public/images/Line2.svg";
import connectImg3 from "../../public/images/Line3.svg";
import connectImg4 from "../../public/images/Line4.svg";
import { MdShare } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";

const Philosophy = () => {
  return (
    <div className="container mx-auto my-10  md:my-20 ">
      <h2 className="text-primary text-center font-bold text-sm md:text-base">
        OUR PHILOSOPHY
      </h2>
      <h2 className="text-[#0b305B] text-3xl md:text-6xl font-semibold text-center mb-5 md:mb-10 mt-2 md:mt-4">
        Human-centred innovation
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-14 md:gap-24 xl:gap-10 lg:gap-12 relative p-5
       lg:p-0 h-[600px] w-[300px] md:w-[700px] md:h-[500px] lg:w-[1000px] xl:w-[1200PX] mx-auto">
        <div className="lg:w-[35%] bg-blue-50 md:w-full lg:h-[400px] rounded-lg xl:p-20 p-5 flex flex-col justify-center items-center text-center">
          <div className="bg-white p-5 space-y-2 w-full rounded-lg shadow-md shadow-gray-300 mb-2">
            <h2 className="text-primary font-semibold text-sm">CORE TECH</h2>
            <h2 className="text-[#0b305B] text-lg lg:text-2xl font-semibold">
              Artificial <br /> Intelligence
            </h2>
          </div>
          <p className="lg:text-sm text-[10px] text-gray-500">
            Using AI/ML to upgrade legacy processes, reduce cost and improve
            efficiency
          </p>
        </div>
        <div className="lg:w-[65%] bg-blue-50 md:w-full lg:h-[400px] rounded-lg p-5 flex flex-col lg:flex-row items-center xl:p-20 text-center gap-5 lg:gap-10">
          <div className="z-20">
            <div className="bg-white p-5 lg:space-y-2 w-fit lg:w-full xl:w-[200px] mx-auto rounded-lg shadow-md shadow-gray-300 lg:mb-2">
              <h2 className="text-primary font-semibold text-[10px] lg:text-sm">
                MECHANISM
              </h2>
              <h2 className="text-[#0b305B] text-sm lg:text-2xl font-semibold">
                BlockChain
              </h2>
            </div>
            <p className="text-[10px] lg::text-sm text-gray-500 lg:text-left text-center ">
              Enhanced security by <br /> eliminating intermediaries
            </p>
          </div>
          <div className="lg:space-y-16 flex flex-row lg:flex-col  gap-10 md:gap-20 lg:gap-0">
            <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2">
              <div className="bg-white p-5 lg:space-y-2 lg:w-[200px] w-fit rounded-lg shadow-md shadow-gray-300 lg:mb-2">
                <h2 className="text-sky-400 font-semibold text-[10px] lg:text-sm">
                  INFRASTRUCTURE
                </h2>
                <h2 className="text-[#0b305B] lg:text-2xl text-sm font-semibold">
                  Cloud
                </h2>
              </div>
              <p className="text-[10px] lg::text-[12px] text-gray-500 w-[100px] lg:text-left text-center">
                Scale resources easily on-demand
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2">
              <div className="bg-white p-5 lg:space-y-2 w-fit lg:w-[200px] rounded-lg shadow-md shadow-gray-300 lg:mb-2">
                <h2 className="text-yellow-600 font-semibold text-[10px] lg:text-sm">
                  RESOURCE
                </h2>
                <h2 className="text-[#0b305B] lg:text-2xl font-semibold text-sm ">
                  Data
                </h2>
              </div>
              <p className="lg:text-[12px] text-gray-500 w-[100px] text-center text-[10px] lg:text-left">
                Valuable,actionable, <br className="md:hidden" />
                insights from mass data sources
              </p>
            </div>
          </div>
        </div>
        <Image
          src={connectImg1}
          alt="image not found"
          height={30}
          width={50}
          className="absolute top-[230px] left-[90px] md:top-[215px] md:left-[230px] md:w-20 md:h-20 lg:top-[230px] lg:left-[297px]
           xl:top-[200px] xl:left-[277px] lg:w-10 lg:h-10 xl:w-[100px] xl:h-[100px] w-10 h-10 translate-x-full transform lg:-rotate-90"
        />
        <Image
          src={connectImg2}
          alt="image not found"
          height={30}
          width={50}
          className="absolute top-[340px] -left-[10px] md:top-[360px] md:left-[170px]  lg:top-[260px] lg:left-[430px] w-20
          xl:left-[625px] h-[87px] translate-x-full transform lg:-rotate-90"
        />
        <Image
          src={connectImg3}
          alt="image not found"
          height={30}
          width={50}
          className="absolute top-[347px] right-[140px] md:top-[367px] md:right-[320px]  lg:top-[130px] lg:left-[430px] w-20
          xl:left-[625px] h-20 translate-x-full transform lg:-rotate-90"
        />
        <Image
          src={connectImg4}
          alt="image not found"
          height={30}
          width={50}
          className="absolute bottom-[115px] left-[104px] md:-bottom-[20px] md:left-[266px] md:w-16 md:h-16  lg:top-[215px]
          xl:top-[214px] xl:left-[800px] lg:left-[600px] lg:w-16 w-10 h-10 lg:h-16 translate-x-full transform lg:-rotate-90"
        />
      </div>

      {/* cards */}
      <div className="mt-10 md:mt-40 lg:mt-10">
        <div className="hidden lg:grid grid-cols-3 items-center gap-10">
          <div className="bg-blue-50 rounded-lg p-10 space-y-5 h-[300px]">
            <MdShare className="text-4xl font-bold text-[#0b305B] bg-blue-200 rounded-full w-fit p-1.5" />
            <h2 className="text-[#0b305B] font-semibold text-2xl">
              Full-suite solutions
            </h2>
            <p className="leading-7 font-semibold">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-10 space-y-5 h-[300px]">
            <FaRegLightbulb className="text-4xl font-bold text-[#0b305B] bg-blue-200 rounded-full w-fit p-1.5" />
            <h2 className="text-[#0b305B] font-semibold text-2xl">
              Simplify the complex
            </h2>
            <p className="leading-7 font-semibold">
              Simplify complex processes and optimise your financial operations
              by leveraging the power of AI, Blockchain, Cloud Computing, and
              Big Data.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-10 space-y-5 h-[300px]">
            <GiProcessor className="text-4xl font-bold text-[#0b305B] bg-blue-200 rounded-full w-fit p-1.5" />
            <h2 className="text-[#0b305B] font-semibold text-2xl">
              Cutting-edge tech
            </h2>
            <p className="leading-7 font-semibold">
              We seamlessly combine cutting-edge technologies, resulting in an
              unparalleled fintech experience for financial institutions.
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto items-center gap-4 p-4 lg:hidden">
          <div className="bg-blue-50 rounded-lg p-5 space-y-5 h-[300px] min-w-[300px] flex-shrink-0">
            <MdShare className="text-4xl font-bold text-[#0b305B] bg-blue-200 rounded-full w-fit p-1.5" />
            <h2 className="text-[#0b305B] font-semibold text-2xl">
              Full-suite solutions
            </h2>
            <p className="leading-7 font-semibold">
              Experience the ease of integration <br /> across various banking{" "}
              <br /> and payment functions with <br /> our comprehensive suite
              of solutions.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-5 space-y-5 h-[300px] min-w-[300px] flex-shrink-0">
            <FaRegLightbulb className="text-4xl font-bold text-[#0b305B] bg-blue-200 rounded-full w-fit p-1.5" />
            <h2 className="text-[#0b305B] font-semibold text-2xl">
              Simplify the complex
            </h2>
            <p className="leading-7 font-semibold">
              Simplify complex processes <br /> and optimise your financial
              operations by <br /> leveraging the power of AI, Blockchain,{" "}
              <br /> Cloud Computing, and Big Data.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-5 space-y-5 h-[300px] min-w-[300px] flex-shrink-0">
            <GiProcessor className="text-4xl font-bold text-[#0b305B] bg-blue-200 rounded-full w-fit p-1.5" />
            <h2 className="text-[#0b305B] font-semibold text-2xl">
              Cutting-edge tech
            </h2>
            <p className="leading-7 font-semibold">
              We seamlessly combine <br /> cutting-edge technologies, <br />{" "}
              resulting in an <br /> unparalleled fintech experience <br /> for
              financial institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
