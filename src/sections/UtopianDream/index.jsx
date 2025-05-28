import React from "react";

// assets
import UtopianDreamImg from "@/assets/utopian-dream.png";

// components
import ProductSlider from "./productSlider";

const UtopianDream = () => {
  return (
    <div className=" w-full flex flex-col justify-start items-center pt-[80px] pb-[60px] ">
      <div className="container px-[63px]">
        <div className=" w-full flex flex-col justify-start items-start mb-[48px] ">
          <p className="text-[32px] text-[#2b2b2b] leading-[101%]">
            A tale of the
          </p>
          <h3 className="text-[74px] text-black leading-[101%] font-medium">
            Utopian Dream
          </h3>
        </div>

        <img
          className="w-full h-[590px] rounded-[20px] overflow-hidden object-cover rounded-tl-[272px] rotate-y-180"
          src={UtopianDreamImg}
          alt="utopian-dream.png"
        />
      </div>

      <ProductSlider />
    </div>
  );
};

export default UtopianDream;
