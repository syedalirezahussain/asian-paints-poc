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
import useScreenSize from "@/hooks/useScreenSize";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const Dimensions = () => {
  const isMobile = useScreenSize() < 768;
  return (
    <div
      className={`${
        !isMobile && "container"
      } w-full flex flex-col justify-start items-center gap-7 !pt-[39px] md:!pt-[70px]`}
    >
      {!isMobile && (
        <FadeInOnScroll className="w-[52%] flex flex-col justify-start items-start gap-[30px] mr-auto text-[#3a3a3a]">
          <h3
            className={`text-[88px] font-medium leading-[88%] ${styles.dimensionsTitle}`}
          >
            A chair that speaks for itself.
          </h3>
          <p className="text-[24px] leading-[126%]">
            Its clean lines, impeccable craftsmanship, & luxurious leather exude
            a timeless elegance. It's more than just furniture; it's a statement
            of refined taste.
          </p>
        </FadeInOnScroll>
      )}

      <div className="w-full flex md:flex-row flex-col-reverse justify-center items-stretch gap-[32px] md:pt-11 ">
        <div className="w-full md:basis-[47%] flex flex-wrap gap-3 md:gap-x-7 md:gap-y-5 md:px-0 px-3">
          <FadeInOnScroll className="w-full h-[164px] md:h-[213px] flex flex-col justify-between items-start basis-full border border-[#0000000F] rounded-[20px] px-[22px] md:px-7 py-[33px]">
            <span className="w-11 h-11 md:w-[52px] md:h-[52px] flex justify-center items-center rounded-full border border-[#0000001A]">
              <FaBezierCurve strokeWidth={0.5} size={isMobile ? 16 : 20} />
            </span>

            <div className=" flex justify-start items-center gap-5 md:gap-7">
              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767] text-[12px] md:text-base">
                  Length
                </p>
                <h5 className="md:text-[20px] font-medium leading-[102%] text-[#3A3A3A]">
                  2000cm
                </h5>
              </div>

              <IoMdClose size={17} />

              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767] text-[12px] md:text-base">
                  Breadth
                </p>
                <h5 className="md:text-[20px] font-medium leading-[102%] text-[#3A3A3A]">
                  1050cm
                </h5>
              </div>

              <IoMdClose size={17} />

              <div className="flex flex-col justify-start items-start gap-2">
                <p className="leading-[132%] text-[#6B6767] text-[12px] md:text-base">
                  Height
                </p>
                <h5 className="md:text-[20px] font-medium leading-[102%] text-[#3A3A3A]">
                  750cm
                </h5>
              </div>
            </div>
          </FadeInOnScroll>

          {dimensionItems.map((item) => (
            <FadeInOnScroll
              key={item.title}
              className="w-full flex flex-col justify-between items-start h-[164px] md:h-[213px] basis-[48.2%] md:basis-[47.5%] border border-[#0000000F] rounded-[20px] p-6 md:px-7 md:py-[33px]"
            >
              <span className="w-11 h-11 md:w-[52px] md:h-[52px] flex justify-center items-center rounded-full border border-[#0000001A]">
                <item.Icon className="w-6 h-6" />
              </span>
              <div className="flex flex-col justify-start items-start gap-1 md:gap-2">
                <p className="leading-[132%] text-[#6B6767] text-[12px] md:text-base">
                  {item.title}
                </p>
                <h5 className="md:text-[20px] font-medium leading-[102%] text-[#3A3A3A]">
                  {item.content}
                </h5>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="relative md:w-[calc(100%-47%)] md:h-[691px] md:rounded-[20px] border border-[#0000001A] md:overflow-hidden mb-[209px] md:mb-0">
          <img
            src={Dimensions1}
            alt="dimensions-1.png"
            className="w-full h-full object-cover"
          />

          {isMobile && (
            <div className="w-[92%] absolute -bottom-[42%] -right-[5%] bg-[#fafafa] rounded-l-[20px] flex flex-col justify-center items-center pl-[51px] pr-12 py-[33px]">
              <span className="w-1 h-16 bg-[#7445B2] absolute left-[30px] top-[36px]"></span>
              <h3
                className={`w-full text-[36px] font-medium leading-[96%] pb-4`}
              >
                A chair that speaks for itself.
              </h3>
              <p className="text-[14px] leading-[126%]">
                Its clean lines, impeccable craftsmanship, & luxurious leather
                exude a timeless elegance. It's more than just furniture; it's a
                statement of refined taste.
              </p>
            </div>
          )}
        </FadeInOnScroll>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between items-center md:items-start ">
        <FadeInOnScroll className="md:basis-[48%] h-[395px] md:mb-0 mb-6 md:h-[691px] md:rounded-[20px] md:border border-[#0000001A] overflow-hidden">
          <img
            src={Dimensions2}
            alt="dimensions-2.png"
            className="w-full h-full object-cover"
          />
        </FadeInOnScroll>

        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default Dimensions;
