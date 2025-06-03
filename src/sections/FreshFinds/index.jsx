import React from "react";

import FreshFinds1 from "@/assets/fresh-finds-1.png";
import FreshFinds2 from "@/assets/fresh-finds-2.png";
import FreshFinds3 from "@/assets/fresh-finds-3.png";
import FreshFinds4 from "@/assets/fresh-finds-4.png";
import useScreenSize from "@/hooks/useScreenSize";
import HomeLine from "@/components/icons/HomeLine";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const FreshFinds = () => {
  const isMobile = useScreenSize() < 768;

  return (
    <div
      className={` px-3 md:px-0 ${
        !isMobile && "container"
      } w-full flex flex-col justify-start items-center`}
    >
      <FadeInOnScroll className="w-full flex flex-col justify-center items-center gap-1 md:gap-5 pb-9">
        <h3 className="md:w-full text-[28px] md:text-[74px] leading-[112%] text-[#3A3A3A]">
          <em className="not-italic font-bold">Fresh</em> Finds
        </h3>
        <p className="md:w-full text-[20px] md:text-[32px] leading-[101%] text-[#2B2B2B]">
          {!isMobile ? "Trending" : ""} Stories of the Decor World
        </p>
      </FadeInOnScroll>

      {isMobile ? (
        <FadeInOnScroll className="w-full grid grid-cols-2 row-span-4 gap-2">
          <div className="col-span-1 aspect-square row-span-1 w-full rounded-[20px] overflow-hidden">
            <img
              src={FreshFinds1}
              className="w-full h-full overflow-hidden"
              alt="fresh-finds-1.png"
            />
          </div>

          <div className="col-span-1 aspect-square row-span1 w-full rounded-[20px] overflow-hidden flex flex-col justify-center items-start gap-[6px] p-6 bg-[#f6f6f6]">
            <HomeLine />

            <div className="mt-[29px] w-full flex justify-start items-center gap-[6px] text-[12px] leading-[140%] text-black opacity-[0.3]">
              <p>Vol 41</p>
              <span className="w-[3.8px] h-[3.8px] bg-[#d9d9d9] rounded-full"></span>
              <p>March 24</p>
            </div>

            <p className="text-[14px] font-medium leading-[104%] mb-[14px]">
              7 cardinal sins of interior design
            </p>
          </div>

          <div className="col-span-2 row-span-2 w-full flex flex-col justify-start items-start border border-[#00000014] rounded-[20px]">
            <div className="w-full flex justify-start items-center gap-[6px] text-[12px] leading-[140%] text-black opacity-[0.3] p-6 pb-0">
              <p>Vol 41</p>
              <span className="w-[3.8px] h-[3.8px] bg-[#d9d9d9] rounded-full"></span>
              <p>March 24</p>
            </div>
            <p className="text-[20px] font-medium leading-[104%] mt-[8px] px-6 mb-[14px]">
              Being earth-friendly in Gujarat with Vinu Daniel
            </p>
            <div className="rounded-[20px] overflow-hidden h-[336px] w-full">
              <img
                src={FreshFinds2}
                className="w-full h-full object-cover"
                alt="fresh-finds-2.png"
              />
            </div>
          </div>

          <div className="col-span-1 aspect-square row-span-1 w-full rounded-[20px] overflow-hidden flex flex-col justify-center items-start gap-[6px] p-6 bg-[#f6f6f6]">
            <HomeLine />

            <div className="mt-[29px] w-full flex justify-start items-center gap-[6px] text-[12px] leading-[140%] text-black opacity-[0.3]">
              <p>Vol 41</p>
              <span className="w-[3.8px] h-[3.8px] bg-[#d9d9d9] rounded-full"></span>
              <p>March 24</p>
            </div>

            <p className="text-[14px] font-medium leading-[104%] mb-[14px]">
              Guide to flooring sheets
            </p>
          </div>

          <div className="col-span-1 aspect-square row-span-1 w-full rounded-[20px] overflow-hidden">
            <img
              src={FreshFinds3}
              className="w-full h-full overflow-hidden"
              alt="fresh-finds-1.png"
            />
          </div>
        </FadeInOnScroll>
      ) : (
        <FadeInOnScroll className="grid grid-cols-4 grid-rows-2 h-[1017px] gap-x-5 gap-y-[22px]">
          {/* ROW 1 */}
          <div className="row-span-1 col-span-2 overflow-hidden rounded-[20px]">
            <img
              src={FreshFinds1}
              className="w-full h-full overflow-hidden"
              alt="fresh-finds-1.png"
            />
          </div>
          <div className="row-span-1 col-span-1 rounded-[20px] overflow-hidden">
            <img
              src={FreshFinds2}
              className="w-full h-full"
              alt="fresh-finds-2.png"
            />
          </div>
          <div className="row-span-1 col-span-1 pl-[40px] rounded-[20px]">
            <p className="text-[32px] font-medium leading-[104%] mb-[14px] mt-11">
              7 cardinal sins of interior design
            </p>

            <div className="w-full flex justify-start items-center gap-[6px] text-[14px] leading-[140%] text-black opacity-[0.3]">
              <p>Vol 41</p>
              <span className="w-[3.8px] h-[3.8px] bg-[#d9d9d9] rounded-full"></span>
              <p>March 24</p>
            </div>
          </div>

          {/* ROW 2  */}
          <div className="row-span-1 col-span-1 rounded-[20px]">
            <p className="text-[32px] font-medium leading-[104%] mb-[14px] mt-11">
              7 cardinal sins of interior design
            </p>

            <div className="w-full flex justify-start items-center gap-[6px] text-[14px] leading-[140%] text-black opacity-[0.3]">
              <p>Vol 41</p>
              <span className="w-[3.8px] h-[3.8px] bg-[#d9d9d9] rounded-full"></span>
              <p>March 24</p>
            </div>
          </div>
          <div className="row-span-1 col-span-2 overflow-hidden rounded-[20px]">
            <img
              src={FreshFinds3}
              className="w-full h-full overflow-hidden"
              alt="fresh-finds-1.png"
            />
          </div>
          <div className="row-span-1 col-span-1 rounded-[20px] overflow-hidden">
            <img
              src={FreshFinds4}
              className="w-full h-full"
              alt="fresh-finds-2.png"
            />
          </div>
        </FadeInOnScroll>
      )}
    </div>
  );
};

export default FreshFinds;
