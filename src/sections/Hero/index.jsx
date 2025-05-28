import React, { useState } from "react";

// components
import Slider from "@/sections/Hero/slider";

// icons
import { SlArrowRight } from "react-icons/sl";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LuPlus } from "react-icons/lu";
import GradientHeart from "@/components/icons/GradientHeart";

// styles
import styles from "./styles.module.scss";
const colors = [
  {
    id: 1,
    className: "from-[#754528] to-[#4E2C18] ",
  },
  {
    id: 2,
    className: "from-[#522E19] to-[#130A05]",
  },
  {
    id: 3,
    className: "from-[#E0C39E] to-[#CA9149]",
  },
];

const Hero = () => {
  const [activeColor, setActiveColor] = useState(1);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white gap-8 pb-[46px]">
      {/* BREAD CRUMBS */}

      <div className="w-full justify-start items-center flex gap-2 text-[13px] px-[63px] pt-8">
        <p className="text-[#9A9A9A] cursor-pointer">Home</p>
        <SlArrowRight stroke="#9a9a9a" size={10} />

        <p className="text-[#9A9A9A] cursor-pointer">Sofa Set</p>
        <SlArrowRight stroke="#9a9a9a" size={10} />

        <p className="text-[#3c3c3c] cursor-pointer">Osaka sofa-bed</p>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="basis-[70%] h-[590px] w-full flex justify-center items-center bg-[#fafafa] rounded-r-[20px] overflow-hidden">
          <Slider />
        </div>
        <div className="basis-[27%] h-[590px] w-full flex flex-col justify-start items-center bg-[#fafafa] rounded-l-[20px]">
          <div className=" w-full flex flex-col justify-start items-center px-8 pt-11">
            <div className="w-full flex justify-start items-center gap-2">
              <p className="text-[#3a3a3a] text-5xl font-bold leading-[96%]">
                Osaka <br />
                <em className="not-italic font-normal">Dining Chair</em>
              </p>

              <GradientHeart />
            </div>

            <p className="text-[20px] font-medium text-[#3a3a3a] mt-[14px] w-full">
              24,999 INR
            </p>

            <div className="w-full flex justify-start items-center z-[1] gap-3 mt-6">
              {colors.map((color) => (
                <span
                  key={color.id}
                  onClick={() => setActiveColor(color.id)}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                    color.className
                  } ${
                    activeColor === color.id ? `${styles.activeColor}` : ""
                  } cursor-pointer`}
                ></span>
              ))}
            </div>

            <p className="mt-6 text-[#6B6767]">
              A premium grey marble dining table outlined with a sharp golden
              frame along with a statement sideboard.
            </p>
          </div>

          <div className="w-full flex flex-col justify-start items-center mt-auto relative">
            <div className="w-full flex flex-col justify-start items-center bg-[#fafafa] shadow-[0_28px_24px_-14px_rgba(55,0,111,0.40)] rounded-[0_0_0_24px] z-10">
              <div className="w-full border-t border-[#BBBBBB33] flex justify-between items-center px-[30px] py-5">
                <p>Delivery</p>
                <LuPlus stroke="#4D4D4D" />
              </div>
              <div className="w-full border-t border-[#BBBBBB33] flex justify-between items-center px-[30px] py-5">
                <p>In-Store</p>
                <LuPlus stroke="#4D4D4D" />
              </div>
            </div>
            <div
              className={`w-full border-t border-[#BBBBBB33] flex justify-between items-center px-[30px] py-5 cursor-pointer ${styles.addToCart}`}
            >
              <p className="z-10 text-white uppercase">Add to Cart</p>
              <LiaAngleDownSolid fill="#fff" className="z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
