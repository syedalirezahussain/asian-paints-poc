import React from "react";
import Accordion from "@/components/Accordion";

// icons
import { FaBezierCurve } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Dimensions1 from "@/assets/dimensions-1.png";
import Dimensions2 from "@/assets/dimensions-2.png";

// constants
import { accordionItems, dimensionItems } from "@/constants";

// styles
import styles from "@/sections/Dimensions/styles.module.scss";

const Dimensions = () => {
  return (
    <div className="container w-full flex flex-col justify-start items-center gap-7 !pt-[70px]">
      <div className="w-[52%] flex flex-col justify-start items-start gap-[30px] mr-auto text-[#3a3a3a]">
        <h3
          className={`text-[88px] font-medium leading-[88%] ${styles.dimensionsTitle}`}
        >
          A chair that speaks for itself.
        </h3>
        <p className="text-[24px] leading-[126%]">
          Its clean lines, impeccable craftsmanship, & luxurious leather exude a
          timeless elegance. It's more than just furniture; it's a statement of
          refined taste.
        </p>
      </div>

      <div className="w-full flex justify-center items-stretch gap-[32px] pt-11">
        <div className="w-full basis-[47%] flex flex-wrap gap-x-7 gap-y-5">
          <div className="w-full h-[213px] flex flex-col justify-between items-start basis-full border border-[#0000001A] rounded-[20px] px-7 py-[33px]">
            <span className="w-[52px] h-[52px] flex justify-center items-center rounded-full border border-[#0000001A]">
              <FaBezierCurve strokeWidth={0.5} size={20} />
            </span>

            <div className="flex items-center gap-7">
              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767]">Length</p>
                <h5 className="text-[20px] font-medium leading-[102%]">
                  2000cm
                </h5>
              </div>

              <IoMdClose size={17} />

              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767]">Breadth</p>
                <h5 className="text-[20px] font-medium leading-[102%]">
                  1050cm
                </h5>
              </div>

              <IoMdClose size={17} />

              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767]">Height</p>
                <h5 className="text-[20px] font-medium leading-[102%]">
                  750cm
                </h5>
              </div>
            </div>
          </div>

          {dimensionItems.map((item) => (
            <div
              key={item.title}
              className="w-full flex flex-col justify-between items-start h-[213px] basis-[47%] border border-[#0000001A] rounded-[20px] px-7 py-[33px]"
            >
              <span className="w-[52px] h-[52px] flex justify-center items-center rounded-full border border-[#0000001A]">
                <item.Icon />
              </span>
              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767]">{item.title}</p>
                <h5 className="text-[20px] font-medium leading-[102%]">
                  {item.content}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[calc(100%-47%)] h-[691px] rounded-[20px] border border-[#0000001A] overflow-hidden">
          <img
            src={Dimensions1}
            alt="dimensions-1.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-start ">
        <div className="basis-[48%] h-[691px] rounded-[20px] border border-[#0000001A] overflow-hidden">
          <img
            src={Dimensions2}
            alt="dimensions-2.png"
            className="w-full h-full object-cover"
          />
        </div>

        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default Dimensions;
