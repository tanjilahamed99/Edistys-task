import FeatureSlider from "@/components/Sliders/FeatureSlider";

const FeatureOfFinance = () => {
  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-primary text-center font-bold text-sm md:text-base">
        TECHNOLOGY BUILT FOR YOU
      </h2>
      <h2 className="text-[#0b305B] text-3xl md:text-6xl font-semibold text-center mb-5 md:mb-10 mt-2 md:mt-4">
        The future of finance
      </h2>

      {/* slider items */}
      <div>
        <FeatureSlider />
      </div>
    </div>
  );
};

export default FeatureOfFinance;
