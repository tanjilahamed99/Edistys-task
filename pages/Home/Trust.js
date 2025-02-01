import Image from "next/image";
import React from "react";

const companyImages = [
  "https://i.ibb.co.com/mFtryrPb/pngwing-com-6.png",
  "https://i.ibb.co.com/n8BhsYWy/pngwing-com-7.png",
  "https://i.ibb.co.com/NngYbpCf/pngwing-com-8.png",
  "https://i.ibb.co.com/ynZ46wnw/pngwing-com-9.png",
  "https://i.ibb.co.com/VW95TsmJ/pngwing-com-10.png",
  "https://i.ibb.co.com/6R5NpJDj/pngwing-com-11.png",
  "https://i.ibb.co.com/mFtryrPb/pngwing-com-6.png",
  "https://i.ibb.co.com/V0N1LvhJ/pngwing-com-13.png",
  "https://i.ibb.co.com/fY82ftsD/pngwing-com-14.png",
  "https://i.ibb.co.com/k2CRLpTP/pngwing-com.png",
  "https://i.ibb.co.com/xK8pBfNb/pngwing-com-1.png",
  "https://i.ibb.co.com/Fb4mN6XJ/pngwing-com-2.png",
  "https://i.ibb.co.com/nNCgYjct/pngwing-com-3.png",
  "https://i.ibb.co.com/sJsgcb3X/pngwing-com-4.png",
  "https://i.ibb.co.com/fYj9z2ZB/pngwing-com-5.png",
];

const Trust = () => {
  return (
    <div className="md:my-32 container mx-auto">
      <h2 className="text-center font-semibold uppercase text-primary mb-5">
        TRUSTED BY THE BEST
      </h2>

      <div className="flex justify-around flex-col md:flex-row gap-10 md:gap-0">
        <div className="text-center">
          <h2 className="text-[#0057BB] text-5xl md:text-6xl lg:text-[100px] font-semibold md:leading-[120px]">
            {">20"}
          </h2>
          <p className="text-[#151D2F] font-">Years of Experience</p>
        </div>
        <div className="text-center">
          <h2 className="text-[#0057BB] text-5xl md:text-6xl lg:text-[100px] font-semibold md:leading-[120px]">
            40+
          </h2>
          <p className="text-[#151D2F] font-">Financial Institutions</p>
        </div>
        <div className="text-center">
          <h2 className="text-[#0057BB] text-5xl md:text-6xl lg:text-[100px] font-semibold md:leading-[120px]">
            {">200m"}
          </h2>
          <p className="text-[#151D2F] font-">Customers Each</p>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-10 md:mt-28 my-10 justify-center">
        {companyImages?.map((img, idx) => (
          <Image
            src={img}
            alt={idx + "not found"}
            key={idx}
            height={200}
            width={200}
            className="w-[100px] h-[100px] mx-auto"
          />
        ))}
      </div>
      <div className="my-10 flex overflow-x-auto gap-6 md:hidden w-[95%] mx-auto">
        {companyImages?.map((img, idx) => (
          <Image
            src={img}
            alt={idx + "not found"}
            key={idx}
            height={200}
            width={200}
            className="w-[70px] h-[70px] mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
