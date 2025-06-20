import React, { useState, useRef, useEffect } from "react";

// components
import Slider from "@/sections/Hero/slider";
import Accordion from "./accordion";
import { AnimatePresence } from "framer-motion";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import CartPopup from "./cartPopup";

// icons
import { SlArrowRight } from "react-icons/sl";
import { LiaAngleDownSolid } from "react-icons/lia";
import GradientHeart from "@/components/icons/GradientHeart";
import { LuInfo } from "react-icons/lu";
import Location from "@/components/icons/Location";
import { FiChevronRight } from "react-icons/fi";

// hooks
import useScreenSize from "@/hooks/useScreenSize";

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
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const isMobile = useScreenSize() < 768;

  const heroRef = useRef(null);
  useEffect(() => {
    const utopianDreamRef = document.getElementById("utopian-dream");

    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      const utopianDreamTop = utopianDreamRef?.getBoundingClientRect().top ?? 0;
      if (heroBottom < 100) {
        setIsPopupVisible(true);
      }

      if (utopianDreamTop < 100 || heroBottom >= 100) {
        setIsPopupVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <div
        key={"Hero"}
        ref={heroRef}
        className="h-[calc(100vh-60px)] md:h-auto w-full flex flex-col justify-start md:justify-center items-center bg-white gap-8 md:pb-[46px] mt-[60px] md:mt-[102px]"
      >
        {/* BREAD CRUMBS */}

        {!isMobile && (
          <div className="w-full justify-start items-center flex gap-2 text-[13px] px-[63px] pt-8">
            <p className="text-[#9A9A9A] cursor-pointer">Home</p>
            <SlArrowRight stroke="#9a9a9a" size={10} />

            <p className="text-[#9A9A9A] cursor-pointer">Sofa Set</p>
            <SlArrowRight stroke="#9a9a9a" size={10} />

            <p className="text-[#3c3c3c] cursor-pointer">Osaka sofa-bed</p>
          </div>
        )}

        <div className="w-full h-full md:h-auto flex flex-col md:flex-row md:gap-7 justify-start items-start">
          <FadeInOnScroll className="md:basis-[66%] md:h-[590px] h-[calc(100%-224px)] md:mb-0 mb-6 w-full flex justify-start md:justify-center items-center md:bg-[#fafafa] md:rounded-r-[20px] overflow-hidden">
            <Slider />
          </FadeInOnScroll>
          {!isMobile ? (
            <FadeInOnScroll className="relative basis-[27.5%] w-full flex flex-col justify-start items-center">
              <div
                className="relative z-30 w-full h-[512px] rounded-[20px] overflow-y-visible bg-[#fafafa] 
          flex flex-col justify-start items-center pl-[30px] pr-[28px] pt-11 shadow-[0_28px_24px_-14px_rgba(55,0,111,0.40)]"
              >
                <div className="w-full flex justify-between items-center gap-2">
                  <p className="text-[#3a3a3a] text-2xl md:text-5xl font-bold leading-[96%]">
                    Osaka {!isMobile ? <br /> : <></>}
                    <em className="not-italic font-normal">Dining Chair</em>
                  </p>

                  <GradientHeart className="mr-[10px]" />
                </div>

                <p className="text-base md:text-[20px] font-medium text-[#3a3a3a] leading-[102%] mt-2 md:mt-[14px] w-full">
                  24,999 INR
                </p>

                <Accordion
                  items={[
                    {
                      title: "Overview",
                      content: (
                        <AccordionItem1
                          setActiveColor={setActiveColor}
                          activeColor={activeColor}
                        />
                      ),
                      id: 1,
                    },
                    {
                      title: "Delivery",
                      content: <AccordionItem2 />,
                      id: 2,
                    },
                    {
                      title: "In Store",
                      content: <AccordionItem3 />,
                      id: 3,
                    },
                  ]}
                />
              </div>

              <div className="w-full z-[10] flex flex-col justify-center items-center mt-auto absolute -bottom-[80px] left-0 rounded-[28px] 2xl:!rounded-br-[20px] overflow-hidden">
                <div
                  className={`w-full h-[116px] border-t border-[#BBBBBB33] flex justify-between items-center px-[30px] pt-15 pb-7 cursor-pointer ${styles.addToCart}`}
                >
                  <p className="z-10 text-white uppercase">Add to Cart</p>
                  <LiaAngleDownSolid
                    stroke="#fff"
                    fill="#fff"
                    className="z-10"
                  />
                </div>
              </div>
            </FadeInOnScroll>
          ) : (
            <FadeInOnScroll className="relative w-full flex flex-col justify-center items-center">
              <div className="w-full gap-3 pb-6 px-3 flex flex-col justify-center items-center z-20 bg-white">
                <div className="w-full flex justify-between items-center">
                  <div className="w-full flex flex-col justify-start items-center text-[#3a3a3a] px-6">
                    <p className="w-full pb-2 font-bold leading-[96%] text-[14px]">
                      Osaka Dining Chair
                    </p>

                    <p className="text-[14px] font-medium text-[#3a3a3a] leading-[102%] w-full">
                      ₹ 24,999
                    </p>
                  </div>
                  <GradientHeart className="mr-[10px]" />
                </div>
                <div className="w-full relative flex justify-start items-center z-[1] gap-3 mt-2 px-6 mb-3">
                  {colors.map((color) => (
                    <span
                      key={color.id}
                      onClick={() => setActiveColor(color.id)}
                      className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r flex justify-center items-center ${
                        color.className
                      } ${
                        activeColor === color.id ? `${styles.activeColor}` : ""
                      } cursor-pointer`}
                    ></span>
                  ))}
                </div>
                <button className="gradientBorder w-full mx-auto !py-6 !pl-8 md:!pl-10 !pr-9 flex justify-between items-center gap-6 !rounded-full shadow-[0px_28px_24px_-14px_rgba(0,0,0,0.15)] ">
                  <p className="w-full text-center leading-[136%] tracking-[-0.36px] font-bold text-white">
                    Add to Cart
                  </p>
                </button>
              </div>
            </FadeInOnScroll>
          )}
        </div>
      </div>
      <CartPopup isVisible={isPopupVisible} />
    </AnimatePresence>
  );
};

const AccordionItem1 = ({ setActiveColor, activeColor }) => {
  return (
    <>
      <div className="relative w-full flex justify-start items-center z-[1] gap-3 md:mt-2 mt-2 md:mb-0 mb-[30px]">
        {colors.map((color) => (
          <span
            key={color.id}
            onClick={() => setActiveColor(color.id)}
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r ${
              color.className
            } ${
              activeColor === color.id ? `${styles.activeColor}` : ""
            } cursor-pointer`}
          ></span>
        ))}
      </div>

      <p className="mt-5 text-[#6B6767]">
        A premium grey marble dining table outlined with a sharp golden frame
        along with a statement sideboard.
      </p>
    </>
  );
};

const AccordionItem2 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-3 bg-white border border-[#E6E7EB] rounded-[8px]">
      <div className="w-full flex justify-start items-center pb-3 gap-3">
        <span className="min-w-9 min-h-9 max-w-9 max-h-9 flex justify-center items-center bg-[#E6E7EB99] rounded-[6px]">
          <Location />
        </span>

        <div className="flex flex-col justify-center items-start gap-1 overflow-hidden">
          <h4 className="w-full text-[14px] font-medium leading-[140%] text-[#202129]">
            Home, 560102
          </h4>
          <p className="w-full text-[12px] leading-[140%] text-[#74798A] whitespace-nowrap overflow-hidden text-ellipsis">
            51 /54, Patwa Chambers, Clive Road, Opp Masjid Stat...
          </p>
        </div>
      </div>

      <div className="w-full flex justify-end items-center gap-1 pt-3 border-t border-[#F2F3F5]">
        <LuInfo size={12} />
        <p className="text-[#919191] text-[10px] leading-[140%] font-medium uppercase">
          Estimated delivery
        </p>
        <p className="text-[12px] leading-[140%] font-medium text-[#202129]">
          10 Business Days
        </p>
      </div>
    </div>
  );
};

const AccordionItem3 = () => {
  return (
    <div
      className="w-full h-[109px] relative rounded-[12px] flex flex-col justify-center items-start overflow-hidden px-[18px]"
      style={{
        backgroundImage: "url(/src/assets/store-accordion-bg.png)",
        backgroundSize: "360px",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#FFFFFF] from-[10%] to-[rgba(0,0,0,0.2)] absolute inset-0 m-auto"></div>
      <div className="w-full flex justify-start items-center gap-[2px] z-40 mb-1">
        <h3 className="text-[#7849BF] text-[14px] leading-[140%] font-bold">
          Find a store
        </h3>
        <FiChevronRight stroke="#7849BF" strokeWidth={2} />
      </div>

      <p className="max-w-[35%] text-[#333642] text-[12px] leading-[140%] font-bold z-40">
        Experience Beyond the Screen!
      </p>
    </div>
  );
};

export default Hero;
