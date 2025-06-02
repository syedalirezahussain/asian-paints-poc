import React from "react";
import AsianPaintsLogo from "@/assets/asian-paints-logo.png";
import Button from "@/components/Button";

import { LuHeart, LuSearch } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import useScreenSize from "@/hooks/useScreenSize";

const Navbar = () => {
  const isMobile = useScreenSize() < 768;

  return (
    <nav className="w-screen flex justify-center items-center border md:border-none border-[#D1D1D866] px-5 md:py-3 md:px-[63px] md:pt-[30px] bg-white">
      <div className="w-full flex md:justify-between justify-start items-center gap-5">
        <div className="md:grow-0 grow">
          <img width={94} height={27} src={AsianPaintsLogo} alt="" />
        </div>

        <div className="md:w-full md:basis-[50%] md:flex justify-start items-center md:px-6 md:py-[14px] md:gap-3 md:border border-[#F2ECEC] rounded-[90px]">
          <LuSearch size={isMobile ? 16 : 20} stroke="#343330" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="hidden md:inline-block text-[#979797] text-[14px] leading-4 focus:outline-none w-full"
          />
        </div>
        {isMobile && (
          <span className="w-[1px] h-14 block bg-[#D1D1D866]"></span>
        )}

        {isMobile ? (
          <div className="flex justify-center items-center gap-4 ">
            <LuHeart size={16} />
            <PiShoppingCartSimpleBold
              size={16}
              style={{
                transform: "rotateY(180deg)",
              }}
            />
          </div>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
