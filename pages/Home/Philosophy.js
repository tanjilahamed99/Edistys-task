import Image from "next/image";
import connectImg1 from "../../public/images/Line1.svg";
import connectImg2 from "../../public/images/Line2.svg";
import connectImg3 from "../../public/images/Line3.svg";
import connectImg4 from "../../public/images/Line4.svg";

const Philosophy = () => {
  return (
    <div className="container mx-auto my-10  md:my-20 ">
      <h2 className="text-primary text-center font-bold text-sm md:text-base">
        OUR PHILOSOPHY
      </h2>
      <h2 className="text-[#0b305B] text-3xl md:text-6xl font-semibold text-center mb-5 md:mb-10 mt-2 md:mt-4">
        Human-centred innovation
      </h2>

      <div className="flex items-center gap-10 relative">
        <div className="w-[40%] bg-blue-50 h-[400px] rounded-lg p-20 flex flex-col justify-center items-center text-center">
          <div className="bg-white p-5 space-y-2 w-full rounded-lg shadow-md shadow-gray-300 mb-2">
            <h2 className="text-primary font-semibold text-sm">CORE TECH</h2>
            <h2 className="text-[#0b305B] text-2xl font-semibold">
              Artificial <br /> Intelligence
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            Using AI/ML to upgrade legacy processes, reduce cost and improve
            efficiency
          </p>
        </div>
        <div className="w-[60%] bg-blue-50 h-[400px] rounded-lg flex items-center p-10 text-center gap-10">
          <div>
            <div className="bg-white p-5 space-y-2 w-full rounded-lg shadow-md shadow-gray-300 mb-2">
              <h2 className="text-primary font-semibold text-sm">MECHANISM</h2>
              <h2 className="text-[#0b305B] text-2xl font-semibold">
                BlockChain
              </h2>
            </div>
            <p className="text-sm text-gray-500">
              Enhanced security by eliminating intermediaries
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <div className="bg-white p-5 space-y-2 w-full rounded-lg shadow-md shadow-gray-300 mb-2">
                <h2 className="text-primary font-semibold text-sm">
                  CORE TECH
                </h2>
                <h2 className="text-[#0b305B] text-2xl font-semibold">Cloud</h2>
              </div>
              <p className="text-sm text-gray-500">
                Using AI/ML to upgrade legacy processes, reduce cost and improve
                efficiency
              </p>
            </div>
            <div>
              <div className="bg-white p-5 space-y-2 w-full rounded-lg shadow-md shadow-gray-300 mb-2">
                <h2 className="text-primary font-semibold text-sm">
                  CORE TECH
                </h2>
                <h2 className="text-[#0b305B] text-2xl font-semibold">Data</h2>
              </div>
              <p className="text-sm text-gray-500">
                Using AI/ML to upgrade legacy processes, reduce cost and improve
                efficiency
              </p>
            </div>
          </div>
        </div>
        <Image
          src={connectImg1}
          alt="image not found"
          height={30}
          width={50}
          className="absolute top-[135px] left-[395px] w-20 h-28 translate-x-full transform -rotate-90"
        />
      </div>
    </div>
  );
};

export default Philosophy;
