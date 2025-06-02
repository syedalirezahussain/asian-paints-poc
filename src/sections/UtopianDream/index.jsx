import React from "react";

// assets
import UtopianDreamImg from "@/assets/utopian-dream.png";

// components
import ProductSlider from "./productSlider";
import useScreenSize from "@/hooks/useScreenSize";

const UtopianDream = () => {
  const isMobile = useScreenSize() < 768;
  return (
    <div
      id="utopian-dream"
      className="scroll-snap-start w-full flex flex-col justify-start items-center pt-[80px] pb-[60px] "
    >
      <div
        className={`w-full ${
          !isMobile ? "container" : ""
        } px-3 md:px-[63px] relative`}
      >
        <div className="md:relative bottom-0 left-10 absolute z-10 w-full flex flex-col justify-start items-start mb-[48px] ">
          <p className="text-[20px] md:text-[32px] text-white md:text-[#2b2b2b] leading-[101%]">
            A tale of the
          </p>
          <h3 className="text-[32px] md:text-[74px] text-white md:text-black leading-[101%] font-medium">
            Utopian Dream
          </h3>
        </div>

        <div className="relative w-full h-[470px] md:h-[590px] md:rounded-[20px] rounded-tl-[120px] md:rounded-tl-[272px] rotate-y-180 overflow-hidden">
          <img
            className="w-full h-full object-cover md:scale-100 scale-[160%]"
            src={UtopianDreamImg}
            alt="utopian-dream.png"
          />
          {isMobile && (
            <span className="absolute inset-0 m-auto w-full bg-gradient-to-r h-full md:h-[590px] md:rounded-[20px] rounded-tl-[120px] md:rounded-tl-[272px] from-[#0000001A] to-[#00000099]"></span>
          )}
        </div>

        {/* OVERLAY */}
      </div>

      <ProductSlider />
    </div>
  );
};

export default UtopianDream;
