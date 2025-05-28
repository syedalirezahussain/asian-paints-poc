import React from "react";

import FreshFinds1 from "@/assets/fresh-finds-1.png";
import FreshFinds2 from "@/assets/fresh-finds-2.png";
import FreshFinds3 from "@/assets/fresh-finds-3.png";
import FreshFinds4 from "@/assets/fresh-finds-4.png";

const FreshFinds = () => {
  return (
    <div className="container w-full flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-center items-center gap-5 pb-9">
        <h3 className="w-full text-[74px] leading-[112%] text-[#3A3A3A]">
          <em className="not-italic font-bold">Fresh</em> Finds
        </h3>
        <p className="w-full text-[32px] leading-[101%] text-[#2B2B2B]">
          Trending Stories of the Decor World
        </p>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 h-[1017px] gap-x-5 gap-y-[22px]">
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
      </div>
    </div>
  );
};

export default FreshFinds;
