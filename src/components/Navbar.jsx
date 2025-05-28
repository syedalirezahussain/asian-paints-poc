import React from "react";
import AsianPaintsLogo from "@/assets/asian-paints-logo.png";
import Button from "@/components/Button";

import { LuHeart, LuSearch } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center items-center px-[63px] pt-[30px] bg-white">
      <div className="w-full flex justify-between items-center">
        <img width={94} height={27} src={AsianPaintsLogo} alt="" />

        <div className="w-full basis-[50%] flex justify-start items-center px-6 py-[14px] gap-3 border border-[#F2ECEC] rounded-[90px]">
          <LuSearch size={20} stroke="#343330" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-[#979797] text-[14px] leading-4 focus:outline-none w-full"
          />
        </div>

        <div className="flex justify-center items-center gap-6">
          <Button>
            <LuHeart />
          </Button>

          <Button>
            <PiShoppingCartSimpleBold
              style={{
                transform: "rotateY(180deg)",
              }}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
